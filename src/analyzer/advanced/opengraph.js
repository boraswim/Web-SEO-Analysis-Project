/*
Insert a customized Open Graph meta tag for each important page on your site. 
The standard is very well documented - you can learn more from Facebook's developer pages.
*/

function CheckOpenGraph(dom)
{
    const openGraphElements = dom.window.document.querySelectorAll("meta[property^='og:']");

    if(openGraphElements.length > 0){return 'positive'};
    
    return 'negative - opengraph meta tag not found';
}

export default CheckOpenGraph;