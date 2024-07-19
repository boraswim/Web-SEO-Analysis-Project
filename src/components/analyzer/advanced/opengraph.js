/*
Insert a customized Open Graph meta tag for each important page on your site. 
The standard is very well documented - you can learn more from Facebook's developer pages.
*/

function CheckOpenGraph(dom)
{
    const checkOpenGraphObj = {};
    const checkOpenGraphArray = [];
    const openGraphElements = dom.window.document.querySelectorAll("meta[property^='og:']");

    if(openGraphElements.length > 0)
        {
            for(let i = 0; i < openGraphElements.length; i++)
            {
                checkOpenGraphArray[i] = openGraphElements[i];
            }
            checkOpenGraphObj['status'] = 'positive';
            checkOpenGraphObj['description'] = 'opengraph meta tags found';
        }

    else
    {
        checkOpenGraphObj['status'] = 'negative';
        checkOpenGraphObj['description'] = 'opengraph meta tag not found';
    }

    checkOpenGraphObj["instances"] = checkOpenGraphArray;
    return checkOpenGraphObj;
}

export default CheckOpenGraph;