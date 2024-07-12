/*
Only ever use noindex meta tag or header on pages you want to keep out of the reach of search engines!
*/

function CheckNoIndexHeader(dom)
{
    const metaElements = dom.window.document.querySelectorAll("meta");
    
    for(var i = 0; i < metaElements.length; i++)
    {
        if(metaElements[i].getAttribute("content") === 'noindex')
        {
            return "negative - noindex meta content found";
        }

    }
        return 'positive';
}

export default CheckNoIndexHeader;