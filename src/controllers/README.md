# 🎮 Functions that will be used when a URL is visited

Create functions that will be used by the routes to handle the requests and responses to the frontend.

_When the url's visited, the controller functions will be called._

A controller is a function that is **responsible for handling requests and responses** between the frontend and backend. 🕸️ Controllers are typically **used in conjunction with routes**, which define the URLs that the frontend can use to interact with the backend.

When a client makes a request to a particular URL, the corresponding **controller function is called to handle the request and generate a response**.📡

Controller functions can perform a wide range of tasks, such as _retrieving data from a database, processing user input, and generating `HTML` or `JSON` responses_.

By encapsulating these tasks in separate controller functions, developers can create more **modular and maintainable code**. 🧩

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

## Security 🔒: Passwords on Databases 🔐

At the moment a new user is being created as below:

```js
const newUser = new User({ username, email, password: passwordHash })
const userSaved = await newUser.save()
```

We will encrypt the password. Using bcrypt.

```js
import bcrypt from 'bcrypt'
```

To protect the passwords on the **database**, it is recommended to use a hashing algorithm plus a salt procedure.

### Hashing 📝

Convert a string into a fixed-length value that represents the original string.

```js
const passwordHash = await bcrypt.hash(password, 10)
```

It is not ~~possible~~ **to convert the hash back into the original string**. This makes it ideal for storing sensitive information, such as passwords, in a database.

✅ `password` -> `$2b$10$69SrwAoAUNC5F.gtLEvrNON6VQ5EX89vNqLEqU655Oy9PeT/HRM/a`

⛔ `$2b$10$69SrwAoAUNC5F.gtLEvrNON6VQ5EX89vNqLEqU655Oy9PeT/HRM/a` <-> `password`

When a user logs in, the password they provide _is hashed and compared to the hashed password_ in the database. If the hashes match, the user is _authenticated_ ✅.

#### Hashing Algorithms ⚙

There are many different hashing algorithms available, such as `MD5`, `SHA-1`, and `SHA-256`. Each algorithm produces a different hash value for the same input string.

### Hashing Security 🔐

However some of these algorithms are not secure anymore, because they are vulnerable to **brute force attacks** and **rainbow table attacks**.

### Brute Force Attack 🤖

A brute force attack is a _trial-and-error_ method used to obtain information, such as a user password or personal identification number (PIN). In a brute force attack, automated software is used to generate a large number of consecutive _guesses_ as to the value of the desired data. Brute force attacks may be used by criminals to **crack encrypted data**, or by **security analysts** to test an organization's network security. 🔓

### Rainbow Table Attack 🌈

A rainbow table is a precomputed table of hash values for every possible combination of characters. _By comparing the hash of a password_ to the values in the rainbow table, it is possible to **determine** the original password ❗.

**[To see more about rainbow table attack](https://www.beyondidentity.com/glossary/rainbow-table-attack)**

## Salting 🧂

To mitigate this, it is mandatory to use **Salt**

In cryptography, a salt is a random string that is added to the input of a hashing algorithm to produce a unique hash value for each input.

```js
const salt = await bcrypt.genSalt(5)
```

With salting, each user's password is hashed with a _different salt value_, which prevents the use of rainbow tables for **cracking passwords**.

## JSON Web Tokens 📡

A JSON Web Token (`JWT`) is a compact, _URL-safe_ means of representing claims to be transferred between two parties.

A token is nothing more than a String that the frontend receives additionally and every time the user wants to request for something, it has to return that String as a pass to know _if the user is_ authorized to do that. 🏈

### A token is composed of three different parts

- Header: Contains the type of token and the hashing algorithm used to generate the signature
- Payload: Contains the data that we want to store in the token
- Signature: Used to verify that the token is valid
- [To see more about JWT](https://jwt.io/introduction)

#### Creating a token

```js
res.cookie('token', token, {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000 // 1 day
})
```

`httpOnly` is a flag that can be included in a `Set-Cookie` header.

The presence of this flag tells the browser that the cookie **should not** be accessible via **client-side script**. This measure is taken to **prevent** cross-site scripting (XSS) attacks.

#### Accessing a token

The `jwt.sign()` method has the `secretOrPrivateKey` parameter, which is used to sign the token. 🔒

In order to encrypt and decrypt what is inside, the same key must be used. 🔑🔓

It behaves like a password, to save and get the information.

The claims in a `JWT` are **encoded** as a `JSON` object that is used as the **payload** of a `JSON` **Web Signature** (`JWS`) structure or as the plaintext of a `JSON` **Web Encryption** (`JWE`) structure, enabling the claims to be _digitally signed_ or _integrity protected_ with a **Message Authentication Code** (`MAC`) and/or encrypted.

### Why it is necessary to store the token in a cookie?

Because the cookie is a **httpOnly** cookie, it is not accessible by **JavaScript** running in the browser. This means that a malicious script cannot read or tamper with the contents of the cookie. The cookie is automatically sent by the browser to the server whenever a request is made to the server for the domain that the cookie belongs to.

## Cookies 🍪

Cookies are small pieces of data that are stored on the client's computer by a web browser while browsing a website.

```js
const token = await createAccesToken({ id: userSaved._id })
res.cookie('token', token)
```

## Files 📁📂

These files gonna be used by the routes to handle the requests and responses to the frontend.

### `auth.controller.js`: Contains the functions that will be used by the routes to handle the requests and responses to the frontend

```js

```
