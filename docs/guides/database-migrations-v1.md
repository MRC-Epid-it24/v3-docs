# Database migrations V1

Intake24 uses a custom SQL database migration system that keeps the database structure in sync with the code changes.

## Database configuration

The database migration tools are not based on Play Framework and require separate database configuration files. The configuration directory is excepted to contain the following three files:

- development-database-config.json
- production-database-config.json
- test-database-config.json

that contain the database connection configuration for the local development database, the main production database and the test (staging) server database.

The connection configuration is described using the following format:

```json
{
  "host": "localhost",
  "useSsl": false,
  "database": "intake24_system",
  "user": "intake24",
  "password": ["intake24"]
}
```

The password field should contain either an empty array (`[]`) for no password or an array with a single string.

The configuration files for `food` and `system` databases should be in two separate directories.

## Running migration scripts

The most straightforward way of running the migration tools is to use `sbt` from the root of the backend ([api-server](https://github.com/intake24/api-server)) repository.

In order to apply the migration scripts for the **system database**, run:

```sh
sbt "databaseTools/runMain uk.ac.ncl.openlab.intake24.sql.tools.system MigrateSystemDatabase --db-config-dir [path to system database config dir]"
```

In order to apply the migration scripts for the **food database**, run:

```sh
sbt "databaseTools/runMain uk.ac.ncl.openlab.intake24.sql.tools.food.MigrateFoodDatabase --db-config-dir [path to food database config dir]"
```
