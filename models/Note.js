var mongoose = require("mongoose");

// Saving a reference to the Schema constructor
var Schema = mongoose.Schema;

// Creating a newSchema object using the Schema constuctor
var NoteSchema = new Schema({

    body: String
});

// Creating the model from the above schema 
var Note = mongoose.model("Note", NoteSchema);

// Exporting the model
module.exports = Note;