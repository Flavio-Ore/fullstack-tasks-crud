# Project: API REST with NodeJS and MongoDB

Exploring the world of NodeJS and MongoDB.

## Cors 🌐

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.

**Cors is installed as a middleware. Either way it will give a error.**

This happens because the front is a xxxx port and the backend is a yyyy port. Therefore, the browser will block the request due to it is as if two completely different domains were communicating with each other.

### Cors Solutions

- Create a proxy in the frontend.
- Install cors in the backend.
- Create a mono-repo and communicate the frontend and backend.

## FILES 📁📂

### `config.js`: Create configuration that the rest of the files can use

### `app.js`: Create the server and the routes

### `db.js`: To be the DATABASE, the conexion to the database

When a user is altered, Mongo DB create a `_id`, `updatedAt` and `createdAt` fields.

> _Using MongoDB Atlas 🍀._

### `index.js`: Start the application

## EXTENSIONS 🧩

- Thunder Client: To test the API.
- Markdown Mermaid: To create diagrams.

## FRONTEND PACKAGES 📦

| PKG  | Name                                                  | Version                                                                                                     | Description                                                                                                                                         |
| ---- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1`  | [vite](https://vitejs.dev/)                           | [![NPM version](https://badge.fury.io/js/vite.svg)](https://npmjs.org/package/vite)                         | A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR). |
| `2`  | [eslint](https://eslint.org/)                         | [![NPM version](https://badge.fury.io/js/eslint.svg)](https://npmjs.org/package/eslint)                     | Find and fix problems in your JavaScript code.                                                                                                      |
| `3`  | [react](https://react.dev/)                           | [![NPM version](https://badge.fury.io/js/react.svg)](https://npmjs.org/package/react)                       | A declarative, efficient, and flexible JavaScript library for building user interfaces.                                                             |
| `4`  | [react dom](https://react.dev/reference/react-dom)    | [![NPM version](https://badge.fury.io/js/react-dom.svg)](https://npmjs.org/package/react-dom)               | This package serves as the entry point to the DOM and server renderers for React.                                                                   |
| `5`  | [react router dom](https://reactrouter.com/en/main)   | [![NPM version](https://badge.fury.io/js/react-router-dom.svg)](https://npmjs.org/package/react-router-dom) | DOM bindings for React Router.                                                                                                                      |
| `6`  | [react hook form](https://react-hook-form.com/)       | [![NPM version](https://badge.fury.io/js/react-hook-form.svg)](https://npmjs.org/package/react-hook-form)   | Performant, flexible and extensible forms with easy-to-use validation.                                                                              |
| `7`  | [axios](https://axios-http.com/)                      | [![NPM version](https://badge.fury.io/js/axios.svg)](https://npmjs.org/package/axios)                       | Promise based HTTP client for the browser and node.js.                                                                                              |
| `8`  | [tailwindcss](https://tailwindcss.com/)               | [![NPM version](https://badge.fury.io/js/tailwindcss.svg)](https://npmjs.org/package/tailwindcss)           | A utility-first CSS framework for rapidly building custom designs.                                                                                  |
| `9`  | [autoprefixer](https://autoprefixer.github.io/)       | [![NPM version](https://badge.fury.io/js/autoprefixer.svg)](https://npmjs.org/package/autoprefixer)         | Parse CSS and add vendor prefixes to rules by Can I Use.                                                                                            |
| `10` | [postcss](https://postcss.org/)                       | [![NPM version](https://badge.fury.io/js/postcss.svg)](https://www.npmjs.com/package/postcss)               | Transforming styles with JS plugins.                                                                                                                |
| `11` | [js-cookie](https://www.npmjs.com/package/js-cookie/) | [![NPM version](https://badge.fury.io/js/js-cookie.svg)](https://www.npmjs.com/package/js-cookie)           | A simple, lightweight JavaScript API for handling browser cookies.                                                                                  |

## BACKEND PACKAGES 📦

| PKG  | Name                                                           | Version                                                                                               | Description                                                                                                                |
| ---- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `1`  | [Express](https://expressjs.com/)                              | [![NPM version](https://badge.fury.io/js/express.svg)](https://npmjs.org/package/express)             | Fast, unopinionated, minimalist web framework for node.                                                                    |
| `2`  | [Nodemon](https://nodemon.io/)                                 | [![NPM version](https://badge.fury.io/js/nodemon.svg)](https://npmjs.org/package/nodemon)             | Simple monitor script for use during development of a node.js app.                                                         |
| `3`  | [Morgan](https://www.npmjs.com/package/morgan)                 | [![NPM version](https://badgen.net/npm/v/morgan)](https://www.npmjs.com/package/morgan)               | HTTP request logger middleware for node.js.                                                                                |
| `4`  | [Mongoose](https://mongoosejs.com/)                            | [![NPM version](https://badge.fury.io/js/mongoose.svg)](https://npmjs.org/package/mongoose)           | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.                                |
| `5`  | [Dotenv](https://www.npmjs.com/package/dotenv)                 | [![NPM version](https://badgen.net/npm/v/dotenv)](https://www.npmjs.com/package/dotenv)               | Dotenv is a zero-dependency module that loads environment variables from a .env file.                                      |
| `6`  | [Bcrypt](https://bcrypt.online/)                               | [![NPM version](https://badgen.net/npm/v/bcrypt)](https://www.npmjs.com/package/bcrypt)               | A library to help you hash passwords.                                                                                      |
| `7`  | [Jsonwebtoken](https://jwt.io/)                                | [![NPM version](https://badgen.net/npm/v/jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken)   | An implementation of JSON Web Tokens.                                                                                      |
| `8`  | [Cookie-parser](https://www.npmjs.com/package/cookie-parser)   | [![NPM version](https://badgen.net/npm/v/cookie-parser)](https://www.npmjs.com/package/cookie-parser) | Parse Cookie header and populate req.cookies with an object keyed by the cookie names.                                     |
| `9`  | [Zod](https://zod.dev/)                                        | [![NPM version](https://badgen.net/npm/v/zod)](https://www.npmjs.com/package/zod)                     | TypeScript-first schema validation with static type inference.                                                             |
| `10` | [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) | [![NPM version](https://badgen.net/npm/v/cors)](https://www.npmjs.com/package/cors)                   | CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. |
