var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");

var router = express.Router();


router.get("/", function(req, res){
    res.render("index");
});

router.get("/scrape", function(req, res){

    axios.get("https://www.nytimes.com").then(function(res){
        var $ = cheerio.load(res.data);
        $("article")
    })
})

// Export routes for server.js to use.
module.exports = router;
