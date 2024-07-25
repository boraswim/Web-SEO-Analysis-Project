/*
You need to use titles and descriptions that are attractive to users and contain your keywords. 
Use the keywords naturally - keyword stuffing is usually detected and will result in a lower ranking. 
What's more, it's pretty off-putting for potential readers, who are more likely to click on an appealing link.
*/

function CheckKeywords(dom)
{
    const checkKeywordObj = {};
    checkKeywordObj["instances"] = [];
    const checkKeywordArray = [];
    const keywords = dom.window.document.querySelectorAll("meta[name='keywords, Keywords']");
    const htmlTitle = dom.window.document.title;
    const metaDescription = dom.window.document.querySelector("meta[name='description']");
    var titleHasKeyword, descriptionHasKeyword;
    console.log(keywords);
    if(htmlTitle !== null && metaDescription !== null && keywords !== null && keywords.length > 0)
    {
        checkKeywordArray[0] = keywords[0].getAttribute("content");
        const keywordsSplit = keywords[0].getAttribute("content").split(",");
        const descriptionContent = metaDescription.getAttribute("content");

        keywordsSplit.forEach(element => {
            if(descriptionContent.includes(element)){descriptionHasKeyword = true;}
        });

        keywordsSplit.forEach(element => {
            if(htmlTitle.includes(element)){titleHasKeyword = true;}
        });

        checkKeywordObj["instances"] = checkKeywordArray;

        if(!descriptionHasKeyword && titleHasKeyword)
            {
                checkKeywordObj["status"] = "negative";
                checkKeywordObj["description"] = "Description does not include keywords";
            }
        else if(descriptionHasKeyword && !titleHasKeyword)
            {
                checkKeywordObj["status"] = "negative";
                checkKeywordObj["description"] = "Title does not include keywords";
            }
        else if(!descriptionHasKeyword && !titleHasKeyword)
            {
                checkKeywordObj["status"] = "negative";
                checkKeywordObj["description"] = "Neither title nor description include keywords";
            }
        else
            {
                checkKeywordObj["status"] = "positive";
                checkKeywordObj["description"] = "Both title and description include keywords";
            }
    }

    else
    {
        checkKeywordObj["status"] = "negative";
        checkKeywordObj["description"] = "No keywords found";
    }

    return checkKeywordObj;
}

export default CheckKeywords;