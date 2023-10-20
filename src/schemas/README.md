# 📝 When the data is retrieved, we will validate the same data

- To perfom data type validation in the backend.
- Throws an error if the data is invalid.
- Before the data is used in the controller, we will validate it.

A schema is a **blueprint** or **template** that **defines the structure and behavior of data** that will be stored in a database or other data source. 🗂️

Schemas are typically defined using a library or framework, such as `Mongoose` in `Node.js`, and specify the **fields**, **data types**, and **validation rules** for the data **that will be stored**.

By defining schemas, developers can ensure that the data stored in the database is consistent and conforms to a specific structure. 📈

When a data is retrieved, it will come as a body of the request. 📝

## Zod 💎

- Zod is a TypeScript-first schema declaration and validation library.
- It is designed to be as fast as possible, with a focus on type safety and great developer experience.
- It is built on top of TypeScript's type system and ships with first class TypeScript support.
- It is a library for data validation. It is used to validate the data that comes from the client.
- Can be used to validate data in frontend and backend.
