<!-- prettier-ignore -->
# DNS-Mongo

Delta Node Starter - Mongo is a REST API starter for NodeJS and Mongo.

### Usage

```
$ git clone https://github.com/delta/dns-mongo.git
$ cd dns-mongo
$ npm i
$ cp default.example.json default.json
$ cp production.example.json production.json
$ npm run dev
```

### Production

```
$ npm run build
$ npm start
```

## Usage and Features

### Strict Mode

Strict mode is enabled by default. For more info refer: https://dev.to/briwa/how-strict-is-typescript-s-strict-mode-311a

### Try-Catch

Use `try-catch` es8 to handle exceptions and promises.

### Centralised Logging

- by default requests are logged in `info` level
- all errors are logged that are thrown using `HTTPException` class
- use different named loggers in different modules. Refer: `general controller`, `user controller`
- alias `bunyan=node_modules/.bin/bunyan` to view logs. E.g. `bunyan logs/logs.json`
- logs are rotated every day.

### BaseURL

Set baseURL in `domain` in config. In the case of usage of `proxy` set accordingly.

### Config

Config is managed using `config` package. Use `production.json` to override default settings in `default.json`.

### Prettier

Use prettier to format.

### Static files

Static files are available at `/static`

### Error

In order to create errors/exceptions use HTTPException through middleware.
e.g

```
return next(
    new HttpException({
            status: 401,
            message: "Invalid webmail credentials!",
            logger: this.logger,
          })
)
```

All these exceptions are captured, logged and handled by `error.middleware.ts`

### Validating incoming data

- Validate incoming data using `Data Transfer Objects (DTO)`.
- Create a corresponding dto file in `DataTransferObjects` to handle validation.
- The validation is handled using `class-validator`.
- Refer: `auth.controller.ts`, [Class Validator](https://www.npmjs.com/package/class-validator)
- There's option to make certain params optional

### Registering Controller

Register the controller to the `App` object in `server.ts`.

### Auth

dns-mongo comes with JWT auth by default. It's designed to work in conjugate with a frontend framework.

Set ```controller.isProtected = true``` to protect **all** routes in the controller.

### Extending Library Interfaces

Setting up parameters like ```req.user```:
- Add a custom type declaration at ```Interfaces/@types/``` with optional parameters.
- Add the required Interface by extending the Required Library interface at ```Interfaces/..```
- Add a [Type-Guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards) for the Custom Interface.

### Guidelines

- Order the imports in categories and order them in lexicographic order.
- Follow the coding guidelines referring to `general.controller.ts` and `auth.controller.ts`.
- The repo is still in early stages. Any kind of structural changes, comments, code quality and usage guidelines are most welcome.
