import ParseElements from './parse.js';
import ScrapeUrl from './scrape.js';
import express from 'express';
const app = express();

app.get("/scrapeurl", (req, res) => {
    var resultObj = {};
    const scrapeUrl = req.query.url;
    ScrapeUrl(scrapeUrl)
    .then(function(result){
        resultObj = ParseElements(result);
        res.send(resultObj);
    })
})

app.get("/", (req,res) => {
    res.send("Test");
})

app.listen(3000, () =>
    console.log('Scraper app listening on port 3000!'),
  );