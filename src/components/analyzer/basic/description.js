/*
Write a meta description for your page. 
Use your target keywords (in a natural way) and write with human readers in mind. 
Summarize the content - describe the topics your article discusses.

The description should stimulate reader interest and get them to click on the article. 
Think of it as a mini-advertisement for your content.
*/

function CheckDescription(dom)
{
    const checkDescriptionObj = {};
    const checkDescriptionArray = [];
    const metaDescription = dom.window.document.querySelector("meta[name='description']");

    if(metaDescription !== null && metaDescription.hasAttribute("content"))
    {
        const descriptionContent = dom.window.document.querySelector("meta[name='description']").getAttribute("content");
        checkDescriptionArray[0] = descriptionContent;
        checkDescriptionObj['instances'] = checkDescriptionArray;
        checkDescriptionObj['details'] = descriptionContent.length;
        if(descriptionContent.length > 40 && descriptionContent.length < 80)
        {
            checkDescriptionObj['status'] = 'positive';

        }
        
        else
        {
            checkDescriptionObj['status'] = 'negative';
            checkDescriptionObj['description'] = 'description length does not meet requirements';
        }
    }

    else
    {
        checkDescriptionObj['status'] = 'negative';
        checkDescriptionObj['description'] = 'no description meta found';
    }

    return checkDescriptionObj;
}

export default CheckDescription;