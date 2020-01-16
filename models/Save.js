var mongoose = require("mongoose");

// Saving a reference to the Schema constructor
var Schema = mongoose.Schema;

// Creating a newSchema object using the Schema constuctor
var SaveSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    
    link: {
        type: String,
        required: true
    },
    
    summary: {
        type: String,
        required: true
    },

    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Creating the model from the above schema 
var Save = mongoose.model("Save", SaveSchema);

// Exporting the model
module.exports = Save;