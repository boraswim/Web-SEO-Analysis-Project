/*
Only ever use noindex meta tag or header on pages you want to keep out of the reach of search engines!
*/

function CheckNoIndexHeader(dom)
{
    const checkNoIndexObj = {};
    const checkNoIndexArray = [];
    const noIndexElements = dom.window.document.querySelectorAll("meta[content='noindex']");
    
    if(noIndexElements.length > 0)
    {
        checkNoIndexObj['status'] = 'negative';
        checkNoIndexObj['description'] = 'noindex meta tags found';
        for(let i = 0; i < noIndexElements.length; i++)
        {
            checkNoIndexArray[noIndexElements.length] = noIndexElements[i];
        }
    }
    
    else
    {
        checkNoIndexObj['status'] = 'positive';
        checkNoIndexObj['description'] = 'noindex meta tags not found';
    }
    
    checkNoIndexObj["instances"] = checkNoIndexArray;
    return checkNoIndexObj;
}

export default CheckNoIndexHeader;