/*
Insert a customized Open Graph meta tag for each important page on your site. 
The standard is very well documented - you can learn more from Facebook's developer pages.
*/

function CheckOpenGraph(dom)
{
    var metaProperty;
    const metaElements = dom.window.document.querySelectorAll("meta");
    var ogChecker = 0;
    
    for(var i = 0; i < metaElements.length; i++)
    {

        metaProperty = metaElements[i].getAttribute("property");
        if(metaProperty !== null && metaProperty.startsWith('og:'))
        {
            return 'positive';
        }
    }
    return 'negative - opengraph meta tag not found';
}

export default CheckOpenGraph;