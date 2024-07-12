/*
Only ever use noindex meta tag or header on pages you want to keep out of the reach of search engines!
*/

function CheckNoIndexHeader(dom)
{
    const noIndexElements = dom.window.document.querySelectorAll("meta[content='noindex']");
    if(noIndexElements.length > 0)
    {
        return "negative - noindex meta content found";
    }
    return 'positive';
}

export default CheckNoIndexHeader;