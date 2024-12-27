# node-rest-boilerplate

[![Hits-of-Code](https://hitsofcode.com/github/cuongndc9/node-rest-boilerplate)](https://hitsofcode.com/view/github/cuongndc9/node-rest-boilerplate)
[![GitHub](https://img.shields.io/github/license/cuongndc9/node-rest-boilerplate.svg)](https://github.com/cuongndc9/node-rest-boilerplate/blob/master/LICENSE)

> 🌏🚀 A Node.js boilerplate with RESTful, Prisma, PostgreSQL and awesome tools.

## Features

- Using ESNext
- Setup Babel, ESLint, Prettier, Ava and Husky.
- Having Basic authentication and authorization.
- Setup a basic RESTful API.
- Using Prisma and PostgreSQL.

## Prepare

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Docker](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to use?

### Step 1: Clone this project and remove `.git` folder

```sh
$ git clone https://github.com/cuongndc9/node-rest-boilerplate.git
$ cd node-rest-boilerplate && rm -rf .git
```

### Step 2: Create .env file

Please follow .env.example file.

### Step 3: Launch Prisma and the connected database

```sh
$ sudo docker-compose up -d
```

### Step 4: Deploy the Prisma datamodel and generate Prisma client

```sh
$ yarn prisma:deploy
```

### Step 5: Install dependencies and run the project

```sh
$ yarn
$ yarn start:dev
```

🙌 Awesome

## License

MIT © [cuongndc9](https://github.com/cuongndc9)
