# 🎮 Functions that will be used when a URL is visited

Create functions that will be used by the routes to handle the requests and responses to the frontend.

_When the url's visited, the controller functions will be called._

## JSON Request Body 📡

Express has a built-in `express.json()` function that returns an `Express` middleware function that parses `JSON` `HTTP` request bodies into `JavaScript` objects.

The `json()` middleware adds a body property to the `Express` request `req`.

To access the parsed request body, use `req.body` as shown below.

```js
import express from 'express'
const app = express()
```

Parse JSON bodies for this app. _Make sure you put_ `app.use(express.json())` **before** your route handlers!

```js
app.use(express.json())

app.post('*', (req, res) => {
  req.body // JavaScript object containing the parse JSON
  res.json(req.body)
})

const server = await app.listen(3000)
```

### Demo showing the server in action

```js
import axios from 'axios'
const res = await axios.post('http://localhost:3000/', {
  answer: 42
})
res.data // `{ answer: 42 }`
```

## TL;DR

A controller is a function that is **responsible for handling requests and responses** between the frontend and backend. 🕸️

Controllers are typically **used in conjunction with routes**, which define the URLs that the frontend can use to interact with the backend.

When a client makes a request to a particular URL, the corresponding **controller function is called to handle the request and generate a response**.📡

Controller functions can perform a wide range of tasks, such as _retrieving data from a database, processing user input, and generating `HTML` or `JSON` responses_.

By encapsulating these tasks in separate controller functions, developers can create more **modular and maintainable code**. 🧩

## Files 📁📂

These files gonna be used by the routes to handle the requests and responses to the frontend.

`auth.controller.js`: Contains the functions that will be used by the routes to handle the requests and responses to the frontend.
