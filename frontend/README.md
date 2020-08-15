# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Notable parts of the application

- An interface for receiving data, `IDataService` is defined. Depending on which configuration is used (production or not), a different impementation of the service is injected. For development, mock data is served. For production, a web api is queried.
- The host and port of the api are provided as build arguments. Currently, the build arguments are handled by docker. In order to receive environment variables during the build process, a custom webpack builder has to be defined. See [this](https://codinglatte.com/posts/angular/using-os-environment-variables-in-angular-with-docker/) for more details.
- When running in docker, the compiled code is sent to an nginx image and served from there. See [this](https://dzone.com/articles/how-to-dockerize-angular-app) for more details.
