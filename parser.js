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

export {ParseImage, ParseLink, ParseScript, ParseStyle, ParseMeta, ParseHeading, ParseText, ParseHeader};