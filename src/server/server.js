import ParseElements from '../components/parser/parser.js';
import AnalyzePage from '../components/analyzer/analyzer.js';
import ScrapeUrl from '../components/scraper/scraper.js';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

app.get("/parseurl", (req, res) => {
    const scrapeUrl = req.query.url;
    ScrapeUrl(scrapeUrl)
    .then(function(result){
        const resultObj = ParseElements(result);
        res.send(resultObj);
    })
    .catch(function(error){
        console.log("Error occured parsing url: " + scrapeUrl);
        console.log(error);
    });
})

app.get("/analyzeurl", (req, res) => {
    const scrapeUrl = req.query.url;
    var sendDate = (new Date()).getTime();
    ScrapeUrl(scrapeUrl)
    .then(function(result){
        var receiveDate = (new Date()).getTime();
        const httpHeaders = result.headers;
        const resultObj = AnalyzePage(result.data, result.headers, scrapeUrl, receiveDate - sendDate);
        res.send(resultObj);
        })
    .catch(function(error){
        console.log("Error occured analyzing url: " + scrapeUrl);
        console.log(error);
    });
})

app.get("/", (req,res) => {
    res.send("Server Page");
})

app.listen(3000, () =>
    console.log('Scraper app listening on port 3000!'),
);