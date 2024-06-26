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
    const textContent = dom.window.document.body.textContent;
    let hArray = [];
    const hText = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let header = "";
    const headerContent = dom.window.document.head.innerHTML;
    let metaArray = [];
    const metas = dom.window.document.querySelectorAll('meta');

   console.log("IMAGES");
   for(let i = 0; i < images.length; i++)
    {
        imageArray.push({id:i+1, source:images[i].src, alt:images[i].alt});
    }
    console.log(imageArray);

    console.log("LINKS");
    for(let i = 0; i < links.length; i++)
    {
        linkArray.push({id:i+1, link:links[i].href});
    }
    console.log(linkArray);

    console.log("SCRIPTS");
    for(let i = 0; i < scripts.length; i++)
    {
        scriptArray.push({id:i+1, src:scripts[i].src, script:scripts[i].innerHTML});
    }
    // console.log(scriptArray);

    console.log("STYLES");
    for(let i = 0; i < inlineStyles.length; i++)
    {
        styleArray.push({id:i+1, type:"inline", css:inlineStyles[i].style.cssText});
    }
    for(let i = 0; i < internalStyles.length; i++)
    {
            styleArray.push({id:styleArray.length+1, type:"internal", css:internalStyles[i].innerHTML});
    }
    for(let i = 0; i < externalStyles.length; i++)
    {
            styleArray.push({id:styleArray.length+1, type:"external", css:externalStyles[i].href});
    }
    console.log(styleArray);

    console.log("TEXTS");
    text = textContent;
    // console.log(text);

    console.log("HEADINGS");
    for(let i = 0; i < hText.length; i++)
    {
        hArray.push({id:i+1, type:hText[i].tagName.toLowerCase(), text:hText[i].innerHTML});
    }
    console.log(hArray);

    console.log("HEADER");
    header = headerContent;
    // console.log(header);

    console.log("METAS");
    for(let i = 0; i < metas.length; i++)
    {
        var metaObj = {};
        metaObj["id"] = i + 1;
        for(let j = 0; j < metas[i].attributes.length; j++)
            {
                var currentAttr = metas[i].attributes[j];
                var attrName = currentAttr.name;
                var attrValue = currentAttr.value;
                metaObj[attrName] = attrValue;
            }
        metaArray.push(metaObj);
        //metaArray.push({id:i+1, name:metas[i].name, property:metas[i].getAttribute('property'), content:metas[i].content, http:metas[i].httpEquiv});
        // need to get all attributes
    }
    console.log(metaArray);
};