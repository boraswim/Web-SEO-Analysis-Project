function ParseHeading(dom)
{
    const headings = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingArray = [];
    for(let i = 0; i < headings.length; i++)
        {
            var headingObj = {};
            headingObj["key"] = i + 1;
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

export default ParseHeading;