# 🛣️ Create the urls of the backend

- Create endpoints or routes that will be used by the frontend
- The urls are the same as the frontend, but with a /api/ prefix

Example: `/api/users` is the url for the users endpoint.

A **route refers to a URL endpoint that is used to handle incoming requests from clients**, such as web browsers or mobile apps. 📡

Routes are defined by the backend application and **specify the actions that should be taken when a client** makes a request to a particular URL.

> _For example, a route might be defined to handle requests to the `/api/users` URL, which would be responsible for retrieving or modifying user data in the backend database. 📈_

## Routes are typically defined using a framework or library

**Such as `Express.js` in JavaScript**

> _Can be configured to **handle different types of HTTP requests**, such as GET, POST, PUT, and DELETE. 🚀_

URLs that are the same as the frontend but with a `/api/` prefix. This is a **common convention** in web development, where the frontend and backend are separated into different applications or services, and the `/api/` prefix is used to distinguish between URLs that are handled by the backend API and those that are handled by the frontend application. 🤝

## Protecting Routes

**Some routes may require authentication** to ensure that only authorized users can access them. 🛡️

> _For example, a route that is used to retrieve user data should only be accessible to authenticated users, and a route that is used to modify user data should only be accessible to authenticated users who are authorized to modify that data. 🔐_

A route that protect other routes. 🤝

> For example all the routes that start with `/api/tasks` are protected by the `/api/login` route.

## Files 📁📂

`*.routes.js`: Contains the routes for the authentication endpoints.

```js
const router = Router()
```

We can now create multiple routes.

## Paths 🗺️

All the paths are relative to the root of the project and start with `/api/`

### Users 🧑

| Method | Path        | Description            |
| ------ | ----------- | ---------------------- |
| `POST` | `/register` | Register a new user    |
| `POST` | `/login`    | Login an existing user |
| `GET`  | `/profile`  | Get the user profile   |
| `POST` | `/logout`   | Logout the user        |

### Tasks 📝

| Method   | Path         | Description          |
| -------- | ------------ | -------------------- |
| `GET`    | `/tasks`     | Get all the tasks    |
| `GET`    | `/tasks/:id` | Get a single task    |
| `POST`   | `/tasks`     | Create a new task    |
| `DELETE` | `/tasks/:id` | Delete a single task |
| `PUT`    | `/tasks/:id` | Update a single task |
