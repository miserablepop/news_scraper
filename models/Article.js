var mongoose = require("mongoose");

// Saving a reference to the Schema constructor
var Schema = mongoose.Schema;

// Creating a newSchema object using the Schema constuctor
var ArticlesSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    
    link: {
        type: String,
        required: true
    },
    
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Creating the model from the above schema 
var Article = mongoose.model("Article", ArticlesSchema);

// Exporting the model
module.exports = Article;