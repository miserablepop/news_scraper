# MongoDB-News-Scraper
A news website scraper (NPR for this example) utilizing MongoDB, Mongoose, and Cheerio. 

---
## How to use the application
Upon visiting the site (see link below), a user will see a navigation bar. This will allow them to chose either to go to the homepage, saved articles, scrape new articles, or clear scraped articles. Here is a brief description of each path.

### Home 
Home page will display either no articles or a list of articles that have been recently scraped. If there are articles, a user can click on one and choose to save it for future reference.

![homepage](/public/images/homepage.png)

### Saved Articles
This page will display all the articles a user has chosen to save for future reference. Here, unlike the home page, a user can click on an article to either: add a note or delete it from the saved queue.

If the user selects to add a note, a modal will appear for the user to enter their article note.

![saved-articles](/public/images/saved.png)

### Scrape New Articles
If a user comes to the site, with no articles appearing, that user can select the button to scrape new articles. The application will retrieve recent articles from NPR and display them. The user can then proceed to save the articles for future reference.

![scraped-articles](/public/images/scrape.png)

### Clear Scraped Articles
If the articles seem outdated, the user can choose to clear the articles. This will clear the queue and allow the user to "re-scrape" new articles.



<b>News Scraper is deployed to Heroku:</b> https://npr-mongodb-scraper.herokuapp.com/


<b>NPM Packages:</b>
- express - https://www.npmjs.com/package/express
- express-handlebars - https://www.npmjs.com/package/express-handlebars
- mongoose - https://www.npmjs.com/package/mongoose
- body-parser - https://www.npmjs.com/package/body-parser
- cheerio - https://www.npmjs.com/package/cheerio
- request - https://www.npmjs.com/package/request


<b>Technologies Used:</b>
- Node.JS
- Javascript
- Express
- Mongoose
- Cheerio
- mLab MongoDB
- Handlebars
- HTML
- Jquery
- CSS

<b>Prerequisites:</b>
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Materialize - 

<b>Author</b>
* JC Lenz