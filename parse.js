import jsdom from 'jsdom';
import LinkFilter from './filter.js';
const { JSDOM } = jsdom;

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
        imageArray = ParseImage(images);
        parsedElements["images"] = imageArray;
        // console.log(imageArray);
    
        // console.log("LINKS");
        linkArray = ParseLink(links);
        parsedElements["links"] = linkArray;
        // console.log(linkArray);
    
        // console.log("SCRIPTS");
        scriptArray = ParseScript(scripts);
        parsedElements["scripts"] = scriptArray;
        // console.log(scriptArray);
    
        // console.log("STYLES");
        styleArray = ParseStyle(inlineStyles, internalStyles, externalStyles);
        parsedElements["stytles"] = styleArray;
        // console.log(styleArray);
    
        // console.log("TEXTS");
        text = ParseText(textContent);
        parsedElements["texts"] = text;
        // console.log(text);
    
        // console.log("HEADINGS");
        headingArray=ParseHeading(headings);
        parsedElements["headings"] = headingArray;
        // console.log(headingArray);
    
        // console.log("HEADER");
        header = ParseHeader(headerContent);
        parsedElements["header"] = header;
        // console.log(header);
    
        // console.log("METAS");
        metaArray = ParseMeta(metas);
        parsedElements["metas"] = metaArray;
        // console.log(metaArray);
        return parsedElements;
    }

function ParseImage(images)
{
    var imageArray = [];
    for(let i=0; i< images.length; i++)
        {
            var imageObj = {};
            imageObj["no"] = i + 1;
            for(let j = 0; j < images[i].attributes.length; j++)
            {
               var currentAttr = images[i].attributes[j];
               if(currentAttr.value != ''){
                   var attrName = currentAttr.name;
                   var attrValue = currentAttr.value;
                   imageObj[attrName] = attrValue;
               }
            }
           imageArray.push(imageObj);
        }
    return imageArray;
}

function ParseLink(links)
{
    var linkArray=[];
    for(let i=0; i< links.length; i++)
        {
            var linkObj = {};
            linkObj["no"] = i + 1;
            for(let j = 0; j < links[i].attributes.length; j++)
            {
                var currentAttr = links[i].attributes[j];
                if(currentAttr.value != ''){
                    var attrName = currentAttr.name;
                    var attrValue = currentAttr.value;
                    linkObj[attrName] = attrValue;
                }
            }
            LinkFilter(linkObj);
            linkArray.push(linkObj);
        }
    return linkArray;
}

function ParseScript(scripts)
{
    var scriptArray=[];
    for(let i = 0; i < scripts.length; i++)
        {
            var scriptObj = {};
            scriptObj["no"] = i + 1;
            for(let j = 0; j < scripts[i].attributes.length; j++)
                {
                    var currentAttr = scripts[i].attributes[j];
                    if(currentAttr.value != ''){
                        var attrName = currentAttr.name;
                        var attrValue = currentAttr.value;
                        scriptObj[attrName] = attrValue;
                    }
                }
            if(scripts[i].innerHTML != '')
                {
                scriptObj["script"] = scripts[i].innerHTML;
                }
            scriptArray.push(scriptObj);
        }
    return scriptArray;
}

function ParseStyle(inlineStyles, internalStyles, externalStyles)
{
    var styleArray = [];
    for(let i = 0; i < inlineStyles.length; i++)
        {
            styleArray.push({no:i+1, type:"inline", css:inlineStyles[i].style.cssText});
        }
        for(let i = 0; i < internalStyles.length; i++)
        {
                styleArray.push({no:styleArray.length+1, type:"internal", css:internalStyles[i].innerHTML});
        }
        for(let i = 0; i < externalStyles.length; i++)
        {
                styleArray.push({no:styleArray.length+1, type:"external", css:externalStyles[i].href});
        }
    return styleArray;
}

function ParseMeta(metas)
{
    var metaArray = [];
    for(let i = 0; i < metas.length; i++)
        {
            var metaObj = {};
            metaObj["no"] = i + 1;
            for(let j = 0; j < metas[i].attributes.length; j++)
                {
                    var currentAttr = metas[i].attributes[j];
                    var attrName = currentAttr.name;
                    var attrValue = currentAttr.value;
                    metaObj[attrName] = attrValue;
                }
            metaArray.push(metaObj);
        }
    return metaArray;
}

function ParseHeading(headings)
{
    var headingArray = [];
    for(let i = 0; i < headings.length; i++)
        {
            var headingObj = {};
            headingObj["no"] = i + 1;
            headingObj["type"] = headings[i].tagName;
            for(let j = 0; j < headings[i].attributes.length; j++)
                {
                    var currentAttr = headings[i].attributes[j];
                    if(currentAttr.value != ''){
                    var attrName = currentAttr.name;
                    var attrValue = currentAttr.value;
                    headingObj[attrName] = attrValue;
                    }
                }
            headingObj["text"] = headings[i].textContent;
            headingArray.push(headingObj);
        }
    return headingArray;
}

function ParseText(textContent)
{
    var text = "";
    for(let i=0; i< textContent.length; i++)
        {
            text.concat(textContent[i].textContent);
        }
    return text;
}

function ParseHeader(headerContent)
{
    var header = headerContent;
    return header;
}

export default ParseElements;