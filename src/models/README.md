# 📊 Save data models from our database

🌿 **MongoDB can store any type of data**, but we need to define the data models for our application.

We will use the Mongoose library to **define our data models and define what type of data we're going to store**.

If it does not comply with the data previously defined, it _will return an error_.

Note: **In oher words we'll create schemas.**

## TL;DR

A model is a **representation** of a data structure that is used to interact with a database or other data source. 🗄️

Models are typically defined using a library or framework, such as `Mongoose` in `Node.js`, and specify the structure and behavior of the data that will be stored.

**By defining models, developers can ensure that the data stored in the database is consistent and conforms to a specific schema**. 📈

Models can also be used to **define relationships** between different types of data, such as _one-to-many_ or _many-to-many_ relationships. This **allows to create more complex data structures** and **query the data** in more sophisticated ways. 🔍

## Files 📁📂

`models/`: Especifies the data models (data types) for our application that we're going to store in our database. Create a fixed structure as tables for MongoDB.

```js
const userSchema = mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true }
})

export default mongoose.model('User', userSchema)
```

When the schema is created, it's a kind of object that we're going to validate, but it is not stored in the database. We need to **create a model from the schema to QUERY the database** using specific methods.

> Mongoose create a set of users called `'User'`.
