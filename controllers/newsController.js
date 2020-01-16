var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

// Setting the middleware
var router = express.Router();

// Require all models
var db = require("../models");


router.get("/", function(req, res){
    res.render("index");
});

router.get("/saved", function(req, res){
    res.render("saved");
});

 // A GET route for scraping the NPR site
router.get("/api/scrape", function(req, res){

    axios.get("https://www.npr.org/").then(function(response){
        var $ = cheerio.load(response.data);

        $(".story-text").each(function(i, element) {

            var result = {};

            result.title = $(this)
                .find(".title")
                .text();

            console.log("What's the result title? " + result.title);

            result.link = $(this)
                .find(".title")
                .parent()
                .attr("href");
            
            db.Article.remove({}, function(err) {
                if (err) {
                    console.log(err)
                }
                else {
                    res.end('success')
                }
            });

            db.Article.create(result)
                .then(function(dbArticle){
                    console.log(dbArticle);
                })
                .catch(function(err){
                    console.log(err);
                });
        });

        // res.send("Scrape Complete");
    });
});

// Route for getting all Articles from the db
router.get("/api/articles", function (req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
        .then(function (dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Route for removing all Articles from the db
router.delete("/api/articles", function (req, res) {
    
    db.Article.remove({})
        .then(function (dbArticle) {
            
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Route for deleting all saved articles 
router.delete("/api/saved", function (req, res) {
    
    db.Save.remove({})
        .then(function (dbArticle) {
            
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Route for deleting all notes
router.delete("/api/notes", function (req, res) {
    
    db.Note.remove({})
        .then(function (dbArticle) {
            
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Route for getting all saved articles
router.get("/api/saved", function (req, res) {
    
    db.Save.find({})
        .then(function (dbArticle) {
            
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

//Route to find specific article for saving
router.get("/api/articles/:id", function (req, res) {
    db.Article.findOne({ _id: req.params.id })
        .then(function (dbArticle) {
            
            res.json(dbArticle);
            
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

//Route to find specific article for saving
router.get("/api/saved/:id", function (req, res) {
    db.Save.findOne({ _id: req.params.id })
    .populate("note")
        .then(function (dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle);
            
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// Export routes for server.js to use.
module.exports = router;
