import { LinkFilter } from '../filter.js';

function ParseLink(dom)
{
    const links = dom.window.document.links;
    const linkArray = [];
    for(let i=0; i< links.length; i++)
        {
            var linkObj = {};
            linkObj["key"] = i + 1;
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

export default ParseLink;