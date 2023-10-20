# 🤖 Defines routes are protected by authenticated users

**A middleware is a function that sits between two other functions**, 🤝Intercepting the data that flows between them.

🛡️ In web development, middlewares are often used to **modify** incoming requests or outgoing responses, or to **perform some other kind of processing** on the **data**.

> _For example, in an `Express.js` web application, a middleware might be used to **log incoming requests** 📝, or to **authenticate users before allowing them to access** certain routes 🔒._

Middlewares can also be used to **modify the response data**, such as by _adding headers_ 📨 or _transforming the data_ in some way 🔄.

Overall, middlewares are a powerful tool for developers to add functionality to their applications in a **modular and reusable way.**

By breaking down complex functionality into smaller, composable pieces, developers can create more **maintainable and scalable applications**. 🚀

## next()

The `next()` function is used to **pass control to the next middleware function** in the stack.

> _The `next()` function is not a part of the Node.js or Express.js APIs, but is instead provided by the middleware function itself._

## Fetching the token from the request trough cookies 🍪

Instead of `req.headers.cookies` we will work with `req.cookies` to get the token.

```js
// ❌
const token = req.headers.cookie.split('=')[1]
```

We are using the `cookie-parser` middleware. Thus, we can access the cookies directly instead of splitting the string to get the token value. 🔑

```js
// ✔
const { token } = req.cookies
```

## Verifying a token

We will use the `jwt.verify()` function to verify the token.

```js
jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
  if (err)
    return res.status(403).json({ message: 'Forbidden, invalid token' })
  // If the token is valid, we will get the decoded payload
  req.user = decoded //decoded = user
})
```

As you can notice, we save the user in the `req` object. This will be useful in the next middleware. 🧵

## Files 📁📂

`validateToken.js`: Contains the middleware that protects the routes that require authentication.

`validator.middleware.js`: Contains the middleware that validates the data vs. schema.
