// index.js
import * as Parser from './parser.js';
import axios from 'axios';
import jsdom from 'jsdom';
import express from 'express';
const { JSDOM } = jsdom;
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

function ParseElements(page)
{
        const parsedElements = {};
        const dom = new JSDOM(page);
        let imageArray = [];
        const images = dom.window.document.images;
        let linkArray = [];
        const links = dom.window.document.links;
        let scriptArray = [];
        const scripts = dom.window.document.scripts;
        let styleArray = [];
        const inlineStyles = dom.window.document.querySelectorAll('[style]');
        const internalStyles = dom.window.document.querySelectorAll('style');
        const externalStyles = dom.window.document.querySelectorAll('[rel|="stylesheet"]');
        let text = "";
        const textContent = dom.window.document.querySelectorAll("*");
        let headingArray = [];
        const headings = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let header = "";
        const headerContent = dom.window.document.head.innerHTML;
        let metaArray = [];
        const metas = dom.window.document.querySelectorAll('meta');
    
        // console.log("IMAGES");
        imageArray = Parser.ParseImage(images);
        parsedElements["images"] = imageArray;
        // console.log(imageArray);
    
        // console.log("LINKS");
        linkArray = Parser.ParseLink(links);
        parsedElements["links"] = linkArray;
        // console.log(linkArray);
    
        // console.log("SCRIPTS");
        scriptArray = Parser.ParseScript(scripts);
        parsedElements["scripts"] = scriptArray;
        // console.log(scriptArray);
    
        // console.log("STYLES");
        styleArray = Parser.ParseStyle(inlineStyles, internalStyles, externalStyles);
        parsedElements["stytles"] = styleArray;
        // console.log(styleArray);
    
        // console.log("TEXTS");
        text = Parser.ParseText(textContent);
        parsedElements["texts"] = text;
        // console.log(text);
    
        // console.log("HEADINGS");
        headingArray=Parser.ParseHeading(headings);
        parsedElements["headings"] = headingArray;
        // console.log(headingArray);
    
        // console.log("HEADER");
        header = Parser.ParseHeader(headerContent);
        parsedElements["header"] = header;
        // console.log(header);
    
        // console.log("METAS");
        metaArray = Parser.ParseMeta(metas);
        parsedElements["metas"] = metaArray;
        // console.log(metaArray);
        return parsedElements;
    }

app.listen(3000, () =>
    console.log('Scraper app listening on port 3000!'),
  );