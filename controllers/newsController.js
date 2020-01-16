var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

var router = express.Router();

var db = require("../models");


router.get("/", function(req, res){
    res.render("index");
});

router.get("/scrape", function(req, res){

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

        res.send("Scrape Complete");
    })
})

// Export routes for server.js to use.
module.exports = router;
