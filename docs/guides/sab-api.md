# SAB API

## Authentication

### 1. Get a refresh token using your credentials

Refresh tokens are similar to API keys in other systems in that they will generally work until revoked, so you only need to do this once.

```
POST /signin

{
  "email": "intake24@intake24.com",
  "password": "Password123"
}
```

You will get the following response:

```json
{
  "refreshToken": "eyJ0e..."
}
```

Cache this token somewhere for future API access.

### 2. Get an access token to access API endpoints

An access token is required to access the actual API endpoints. You can get an access token with:

```
POST /refresh
X-Auth-Token: <your refresh token>
```

You will get the following response:

```json
{
  "accessToken": "eyJ0e..."
}
```

By default this token is valid for 15 minutes (this depends on the configuration of your Intake24 instance).

You can either request a new access token every time you need to use an endpoint as an easy solution, or use the recommended way of attempting the API call with the cached access token and requesting a new one if it gets denied with 401.

## Creating or updating respondent accounts

To create one or more respondent user accounts

```
POST /surveys/{survey ID}/users/respondents
X-Auth-Token: <your access token>
```

and the following body:

```json
{
  "users": [
    {
      "userName": "external_user_id",
      "password": "password123",
      "name": [],
      "email": [],
      "phone": [],
      "customFields": {}
    },
    ...
  ]
}
```

Note the unusual format for optional fields: they are encoded using arrays where an empty array denotes a missing value and an array with exacly one element denotes a present value, but all fields must always be present in the user description object.

The response is:

```json
{
  "users": [
    {
      "userId": 271,
      "surveyId" : "survey123",
      "userName": "external_user_id",
      "urlAuthToken": "iRFcq3zTGeHVLeRjaLWF0vv0P-4NFsvW"
    },
    ...
  ]
}
```

Where `users` is an array of objects corresponding to each user object in the request. `userId` is Intake24 internal user ID (required for update/delete operations), `userName` is the external user ID and `urlAuthToken` is the URL-embeddable authentication token required to create personalised links to Intake24.

The personal user link should be in this form:

```
{base Intake24 survey frontend URL}/surveys/{survey ID}?auth={url-auth-token}
```

## Exporting survey submissions

To get the survey submissions as JSON,

```
GET /data-export/{survey_id}/submissions?userName={user_name}&dateFrom={date_from}&dateTo={date_to}&offset={offset}&limit={limit}
```

where

- `survey_id` is the survey identifier,
- `user_name` (optional) is the survey-specific user name (NOT the Intake24 numerical user ID),
- `date_from` (optional) is the timestamp for the beginning of time period to download submissions for,
- `date_to` (optional) is the timestamp for the end of time period to download submissions for,
- `offset` (required) is the number of records to skip (in the specified time period),
- `limit` (required) is the number of records to return (in the specified time period), starting at offset. There is a hard limit of 1000 records that can be returned at once.

Note: dates are expected in the ISO 8601 format, e.g. "2017-02-10T11:49:12Z".

Response body is a JSON array of survey submission objects:

```json
[
  {
    "id": "2e90f16a-c8b7-4f68-9a3c-44e4b92ee807",
    "userId": 123,
    "userAlias": ["user1"],
    "userCustomData": {
      "userCustomField1": "123"
    },
    "surveyCustomData": {
      "surveyCustomField1": "456"
    },
    "startTime": "2017-04-26T10:34:19.99+01:00[Europe/London]",
    "endTime": "2017-04-26T12:34:19.99+01:00[Europe/London]",
    "meals": [
      {
        "name": "Breakfast",
        "time": {
          "hours": 8,
          "minutes": 0
        },
        "customData": {
          "mealCustomField1": "abc"
        },
        "foods": [
          {
            "code": "FOOD001",
            "englishDescription": "Example food",
            "localDescription": ["Exemple alimentaire"],
            "searchTerm": "good food",
            "nutrientTableId": "NDNS",
            "nutrientTableCode": "1234",
            "isReadyMeal": false,
            "portionSize": {
              "method": "as-served",
              "data": {
                "servingWeight": "100",
                "leftoversWeight": "50"
              }
            },
            "reasonableAmount": true,
            "foodGroupId": 10,
            "brand": "Some brand",
            "nutrients": [
              [1, 5],
              [2, 10],
              [3, 14]
            ],
            "customData": {
              "foodCustomField": "asdf"
            }
          }
        ],
        "missingFoods": [
          {
            "name": "Some food",
            "brand": "Dunno",
            "description": "Something yellow",
            "portionSize": "Ate until it was gone",
            "leftovers": "Nope"
          }
        ]
      }
    ]
  }
]
```

where

- `id` is the unique identifier of the submission,
- `userName` is the identifier of the respondent that made the submission,
- `userCustomData` is an object with custom data fields for the user that made the submission (for custom survey schemes, empty for standard scheme),
- `surveyCustomData` is an object with custom data fields for the submission (for custom survey schemes, empty for standard scheme),
- `startTime` is the time when the respondent has started filling out the survey (in ISO 8601 format),
- `endTime` is the time when the respondent has submitted the survey (in ISO 8601 format),
- `meals` is an array of objects describing the meals in this submission, where
  - `name` is the name of the meal as specified by the respondent,
  - `time` is the time of the meal as specified by the respondent, represented as an object with two fields, hours and minutes,
  - `customData` is an object with custom data fields for this meal (for custom survey schemes, empty for standard scheme),
  - `foods` is an array of objects describing the foods in this meal, where
    - `code` is the Intake24 food code,
    - `englishDescription` is the English description of this food (from the food database record),
    - `localDescription` is the local description of the food in the survey's locale, if available (see Optional type),
    - `searchTerm` is the description of this food as originally typed by the respondent before the database lookup,
    - `nutrientTableId` is the identifier of the food composition table that is the source of nutritional composition information for this food,
    - `nutrientTableCode` is the identifier of the record in the food composition table that this food is mapped to,
    - `isReadyMeal` is a boolean value specifying if the respondent has marked this food as a ready meal,
    - `portionSize` is the result of the portion size estimation, where
      - `method` is the identifier of the portion size estimation method used for this food,
      - `data` is an object with the data fields specific to the portion size estimation method, however two fields are always present: `servingWeight` and `leftoversWeight` that correspond to the weight of the original serving and the weight of the leftovers as determined by this portion size estimation methods. The weights are always in grams (or milliliters for liquids) and are given by strings containing floating point numbers in decimal format.
    - `reasonableAmount` is a boolean value that is the result of the "reasonable amount" check, a simple check that tests if the food amount is realistic (specified per food in the database),
    - `foodGroupId` is the identifier of the food group this food belongs to,
    - `brand` is the brand of this food, if known, or a blank string,
    - `nutrients` is an array containing nutritional information, where each element is a two-element array where the first element is the identifier of the nutrient type and the second element is the weight or volume (units are dependent on the nutrient type).
    - `customData` is is an object with custom data fields for this food (for custom survey schemes, empty for standard scheme).

Error codes:

`HTTP 401 Unauthorized`: the access token is missing, invalid, or has expired. Get a new token and try again.

`HTTP 403 Forbidden`: the access token is valid, but you don't have the right to perform this operation.

`HTTP 400 Bad Request`: request parameters missing or invalid.

`HTTP 404 Not Found`: the survey or user identifier is invalid.
