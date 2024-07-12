/*
Only ever use noindex meta tag or header on pages you want to keep out of the reach of search engines!
*/

function CheckNoIndexHeader(dom)
{
    const noIndexMeta = dom.window.document.querySelector("meta[content='noindex']");
    if(noIndexMeta !== null)
    {
        return "negative - noindex meta content found";
    }
    return 'positive';
}

export default CheckNoIndexHeader;