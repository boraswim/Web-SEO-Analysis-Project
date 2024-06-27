import ParseElements from './parser.js';
import axios from 'axios';
import express from 'express';
const app = express();

app.get("/scrapeurl", (req, res) => {
    var resultObj = {};
    const scrapeUrl = req.query.url;
    PerformScraping(scrapeUrl)
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

async function PerformScraping(scrapeUrl){
    const response = await axios.request({
        method: "GET",
        url: scrapeUrl,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
            }
    });
    return response.data;
};