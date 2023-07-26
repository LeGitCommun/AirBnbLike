// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('apidico');

// Create a new document in the collection.
db.getCollection('dictionary').insertOne({ 
    word: "JavaScript",
    definition: "JavaScript is a programming language used to make web pages interactive." 
  });
