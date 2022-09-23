# Database migrations V2

Starting from API v2 Intake24 uses Flyway to handle database migrations.

## Database configurations

Copy `DatabaseMigrations/src/main/resources/databases.example.conf` to a local directory outside of the project source tree.

Create a single copy of the file per database instance (e.g., `dev-db.conf` for local development databases, `prod-db.conf` for production databases) and edit the database connection information.

## Running migrations

The easiest way to run the migration tool is to use the Gradle task.

To apply system database migrations, from the run the following command from the api-v2 project root:

```sh
gradle -Dconfig.file=/path/to/database.conf :DatabaseMigration:migrateSystem
```

To apply food database migrations, from the run the following command from the api-v2 project root:

```sh
gradle -Dconfig.file=/path/to/database.conf :DatabaseMigration:migrateFoods
```
