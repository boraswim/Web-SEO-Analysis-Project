/*
Make sure every image has an alt tag, and add useful descriptions to each image. 
Add your keywords or synonyms - but do it in a natural way.
*/

function CheckAltText(dom)
{
    const checkAltTextObj = {};
    const imgElements = dom.window.document.images;
    const noAltTextArray = [];

    checkAltTextObj['status'] = 'positive';

    if(imgElements !== null)
    {
        for(var i = 0; i < imgElements.length; i++)
        {
            if(imgElements[i].getAttribute("alt") !== undefined){continue;}
            
            else
            {
                noAltTextArray[i] = imgElements[i];
                checkAltTextObj['status'] = 'negative';
            }
        }
        checkAltTextObj['instances'] = noAltTextArray;
    }

    return checkAltTextObj;
}

export default CheckAltText;