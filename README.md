# Express Typescript Boilerplate with ORM

## Project Structure

```
|--src\v1
    |--configs\        # config of plugins and environments
    |--controllers\    # route controller functions
    |--docs\           # swagger documentation files
    |--dao\            # dao files
    |--datasources\    # orm data sources config files
    |--dto\            # dto files
    |--entities\       # orm entities files
    |--enums\          # required enums
    |--environments\   # different types of environment configuration
    |--errors\         # Error handling files fro different types of error
    |--generators\     # generator functions of different values
    |--helpers\        # route controller helpers functions
    |--interfaces\     # interface files
    |--logger\         # base logger and file logger config files
    |--middlewares\    # express middlewares related to auth and validation
    |--nginx\          # docker configs and docker file for nginx
    |--plugins\        # plugins for project like redis and mongodb
    |--repositories\   # orm entity repository files
    |--responses\      # success response object builder
    |--routes\         # route definitions
    |--test\           # unit test definition functions
    |--utility\        # utility functions
    |--validators\     # request validator functions
    |--app.ts          # express application init and injections
|--.dockerignore       # docker ignore lists
|--.env.example        # env file example
|--.gitignore          # git ignore list
|--.mocharc.json       # mocha config
|--.prettierignore     # prettier ignore list
|--.prettierrc         # prettier config
|--docker-compose.yaml # docker compose file
|--Dockerfile          # docker file
|--index.ts            # application entry point, server, shutdown
|--package-lock.json
|--package.json
|--README.md
|--tsconfig.json       # tsconfig.json file
```

## API Documentation

Documentation is available at `http://{host}:{port}/v1/docs` you can see the schema definition and routes definition and response definition with examples. Test the API endpoints from here as well.

### Run this command to test manually

```
npm test
```

### To run the project use this command
```
npm run dev
```
