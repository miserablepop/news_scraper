var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

var router = express.Router();

var db = ("../models");


router.get("/", function(req, res){
    res.render("index");
});

router.get("/scrape", function(req, res){

    axios.get("https://www.nytimes.com").then(function(res){
        var $ = cheerio.load(res.data);
        $("article").each(function(i, element){
            var result = {};

            result.title = $(this)
                .children("h2 span")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");

            db.Article.create(results)
                .then(function(dbArticle){
                    console.log(dbArticle);
                })
                .catch(function(err){
                    console.log(err);
                });
        });

        res.json(dbArticle);
    })
})

// Export routes for server.js to use.
module.exports = router;
