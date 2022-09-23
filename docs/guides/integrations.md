# Integration with 3rd party systems

## Redirect out of the intake24

### Survey-specific URL

- Respondent (user) redirected to static (generic) URL, same for whole study
- The URL can include a special string `[intake24_username_value]` that will be replaced with the current user ID, e.g.:

```
https://some.url/intake24-complete?user=[intake24_username_value]
```

- (Note that this is the user ID as specified when creating or uploading user records and not the internal Intake24 ID)
- This is set up in `Follow-up survey URL` field in survey settings

### Respondent-specific URL (respondent account is created beforehand)

- Respondent redirected to respondent-specific URL
- Respondent-specific URL uploaded using CSV file upload
- Add new column to your CSV file with `redirect url` header and fill in the URLs accordingly
- Upload into the Intake24 system via admin site

### Respondent-specific URL (respondent account is created on-the-fly)

- Respondent redirected to respondent-unique URL
- Respondent account is created during the system access / redirect from 3rd party system
- Respondent account can be created using one of the following URL formats:

  **a. Frontend URL, which redirects request to API and handles whole sign in process:**

  - URL: `https://example.com/surveys/{survey}?createUser={jwt}`

  **b. Direct API request, which returns respondent data in JSON response and authentication URL must be constructed from provided authentication token:**

  - URL: `https://api.example.org/surveys/{survey}/create-user?params={jwt}`

Response:

```json
{
    "userId": number, -> internal user id
    "redirect": string, -> redirect URL
    "authToken": string -> authentication token (random string)
}
```

- Auth URL is then: `https://example.com/surveys/{survey}?auth={authToken}`

  - Replace {survey} with survey name
  - Replace {jwt} with generated JWT
  - Replace {authToken} with authentication token returned from API response

- JWT specifications of supplied token:

  - Supported algorithms – HS256 / HS512
  - JWT token must be signed with secret set in `JWT secret for user generation` field in survey settings (survey admin can set this up, please contact relevant Intake24 team if you don't have permissions)
  - PLEASE NOTE: JWT secret should be stored securely, thus ideally not embedded into 3rd party system frontend code, which gets exposed.
  - Expected claims are:
    - `user` – respondent-unique identifier to be used within the study
    - `redirect` - 3rd party system URL where respondent should be redirected to (they need to click on the button once they submitted the recall)

## Redirect into the Intake24 system

When respondent accounts are created using the system admin tool, authentication URLs can be downloaded back from Intake24 system. These can be then embedded into the 3rd party system for redirection

## Notifications

- Intake24 V3 allows to specify webhook / URL, which gets called upon at successful recall submission
- This is set in `Submission notification URL` field in survey settings (survey admin can set this up, please contact relevant Intake24 team if you don't have permissions)

### Request specifications:

- POST request / JSON content-type
- `Authorization` header with `Bearer {jwt}`
- JWT Token is signed with secret set in `JWT secret for user generation` field in survey settings (survey admin can set this up, please contact relevant Intake24 team if you don't have permissions)
- Request body contains whole submission data set
- a request bin or API endpoint must be set up (by external party) to capture this notification event

### JWT specifications:

- signing algorithm – HS256
- issuer “intake24”
- subject – alias / survey user identifier
- audience – notification URL
- expires in 5mins of token issue datetime
