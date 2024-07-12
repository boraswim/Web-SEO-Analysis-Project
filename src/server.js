import ParseElements from './parser/parser.js';
import AnalyzePage from './analyzer/analyzer.js';
import ScrapeUrl from './scrape.js';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.get("/scrapeurl", (req, res) => {
    const scrapeUrl = req.query.url;
    ScrapeUrl(scrapeUrl)
    .then(function(result){
        const resultObj = ParseElements(result);
        res.send(resultObj);
    })
    .catch(function(error){
        console.log("Error occured scraping url: " + scrapeUrl);
    });
})

app.get("/analyzeurl", (req, res) => {
    const scrapeUrl = req.query.url;
    ScrapeUrl(scrapeUrl)
    .then(function(result){
        const resultObj = AnalyzePage(result.data, scrapeUrl)
        res.send(resultObj);
        })
    .catch(function(error){
        console.log("Error occured scraping url: " + scrapeUrl);
    });
})

app.get("/", (req,res) => {
    res.send("Server Page");
})

app.listen(3000, () =>
    console.log('Scraper app listening on port 3000!'),
);