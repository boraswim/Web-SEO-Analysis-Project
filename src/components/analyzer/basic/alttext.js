/*
Make sure every image has an alt tag, and add useful descriptions to each image. 
Add your keywords or synonyms - but do it in a natural way.
*/

function CheckAltText(dom)
{
    const checkAltTextObj = {};
    const checkAltTextArray = [];
    const imgElements = dom.window.document.images;

    checkAltTextObj['status'] = 'positive';
    checkAltTextObj['description'] = 'all image(s) have alttext';

    if(imgElements !== null)
    {
        for(var i = 0; i < imgElements.length; i++)
        {
            if(imgElements[i].getAttribute("alt") !== undefined){continue;}
            
            else
            {
                checkAltTextArray[checkAltTextArray.length] = imgElements[i];
                checkAltTextObj['status'] = 'negative';
                checkAltTextObj['description'] = 'image(s) with no alttext found';
            }
        }
        checkAltTextObj['instances'] = checkAltTextArray;
    }

    return checkAltTextObj;
}

export default CheckAltText;