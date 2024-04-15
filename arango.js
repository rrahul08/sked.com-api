const { Database, aql } = require("arangojs");

// Create a new ArangoDB database connection
const db = new Database({
  url: "http://localhost:8529", // adjust the URL to match your ArangoDB server
  databaseName: "sked", // adjust the database name
});

// Connect to the ArangoDB database
 // You can select the database here or directly specify in the Database constructor

// Check if the connection was successful
db.listCollections().then(
  () => console.log("ArangoDB connected"),
  (err) => console.error("Failed to connect to ArangoDB:", err)
);

// Define your schema similar to Mongoose
const newSchema = {
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
};

// You don't need to explicitly define a model in ArangoDB

module.exports = {
  db: db, // Export the database instance if needed
  newSchema: newSchema, // Export the schema if needed
};
