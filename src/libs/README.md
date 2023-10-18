# 📚 Write code to import multiple times

- Generate tokens

## Files 📁📂

### `jwt.js`: Contains the `createAccesToken()` function

#### JWT Signature: `jwt.sign(payload, secretOrPrivateKey, [options, callback])`

The `jwt.sign()` method has the `secretOrPrivateKey` parameter, which is used to sign the token. 🔒

In order to encrypt and decrypt what is inside, the same key must be used. 🔑🔓

It behaves like a password, to save and get the information.

The payload param is the data that we want to store in the token.

```js
import jwt from 'jsonwebtoken'

jwt.sign(
  payload,
  process.env.JWT_SECRET_KEY,
  { expiresIn: 'x time' },
  (err, token) => {
    if (err) reject(err)
    resolve(token)
  }
)
```

#### `payload`

The payload param is the data that we want to store in the token.

#### `process.env.JWT_SECRET_KEY`

The secret key is used to save the content and get it back.

#### `{ options }`

The options param is used to specify the expiration time of the token.

#### Callback: `(err, token) => { }`

The callback function is used to handle the token or the error.

## TL;DR

A library (or "lib" for short) is a collection of pre-written code that can be used to perform common tasks or add functionality to an application. 🛠️

Libraries are typically distributed as packages that can be installed using a package manager, such as npm. Once installed, the library can be imported into an application and used to perform specific tasks or add functionality to the application. 📦

There are many libraries available for JavaScript, ranging from general-purpose libraries like Lodash and jQuery to more specialized libraries for tasks like data visualization or server-side rendering. By using libraries, developers can save time and effort by leveraging pre-written code and focusing on the unique aspects of their application. 💻
