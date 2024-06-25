// index.js

const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function performScraping(){
    const response = await axios.request({
        method: "GET",
        url: "https://www.w3schools.com/jsref/met_htmlcollection_item.asp",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    });
    return response.data;
};

performScraping()
.then(function(result){
    getElements(result);
});

function getElements(page)
{
    const dom = new JSDOM(page);
    const images = dom.window.document.images;
    const links = dom.window.document.links;
    const scripts = dom.window.document.scripts;
    const internalStyles = dom.window.document.querySelectorAll('[style]');
    // const texts = dom.window.document.textContent;

   console.log("IMAGES");
   for(let i = 0; i < images.length; i++)
    {
        console.log(i+1 + ". image source: " + images[i].src + "\nalt-text: " + images[i].alt);
    }
    console.log("LINKS");
    for(let i = 0; i < links.length; i++)
        {
            console.log(i+1 + ". link href: " + links[i].href);
        }
    console.log("SCRIPTS");
    for(let i = 0; i < scripts.length; i++)
        {
            console.log(i+1 + ". script src: " + scripts[i].src + "\ninner-html:" + scripts[i].innerHTML);
        }
    console.log("INTERNAL STYLES");
    for(let i = 0; i < internalStyles.length; i++)
        {
            console.log(i+1 + ". internal style: " + internalStyles[i].style.cssText);
        }
    
    /*
    OLD cheerio CODE
    const $ = cheerio.load(data);
    const $links = $('link');
    const $images = $('img');
    const $scripts = $('script');
    const $styles = $("[style!='']");
    const $texts = $('p');
    console.log($styles);
    */
};

// will use jsdom instead of cheerio