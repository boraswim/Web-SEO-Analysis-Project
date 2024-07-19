/*
You need to use titles and descriptions that are attractive to users and contain your keywords. 
Use the keywords naturally - keyword stuffing is usually detected and will result in a lower ranking. 
What's more, it's pretty off-putting for potential readers, who are more likely to click on an appealing link.
*/

function CheckKeywords(dom)
{
    const checkKeywordObj = {};
    const checkKeywordArray = [];
    const keywords = dom.window.document.querySelectorAll("meta[name='keywords, Keywords']");
    const htmlTitle = dom.window.document.title;
    const metaDescription = dom.window.document.querySelector("meta[name='description']");
    var titleHasKeyword, descriptionHasKeyword;
    if(htmlTitle !== null && metaDescription !== null)
    {
        const descriptionContent = metaDescription.getAttribute("content");
        checkKeywordArray[0] = descriptionContent;
        for (var i = 0; i < descriptionContent.length; i++) {
            for(var j = 0; j < keywords.length; j++)
            {
                if(descriptionContent[i] === keywords[j])
                    {
                        descriptionHasKeyword = true;

                    }
            }
        }

        checkKeywordArray[1] = htmlTitle;
        for (var i = 0; i < htmlTitle.length; i++) {
            for(var j = 0; j < keywords.length; j++)
            {
                if(htmlTitle[i] === keywords[j]){titleHasKeyword = true;}
            }
        }
        checkKeywordObj["status"] = "negative";
        checkKeywordObj["description"] = "no keywords found";
        checkKeywordObj["instances"] = checkKeywordArray;

        if(!descriptionHasKeyword && titleHasKeyword)
            {
                checkKeywordObj["status"] = "negative";
                checkKeywordObj["description"] = "description does not include keywords";
            }
        if(descriptionHasKeyword && !titleHasKeyword)
            {
                checkKeywordObj["status"] = "negative";
                checkKeywordObj["description"] = "title does not include keywords";
            }
        if(!descriptionHasKeyword && !titleHasKeyword)
            {
                checkKeywordObj["status"] = "negative";
                checkKeywordObj["description"] = "neither title nor description include keywords";
            }
        else
            {
                checkKeywordObj["status"] = "positive";
                checkKeywordObj["description"] = "both title and description include keywords";
            }
    }

    return checkKeywordObj;
}

export default CheckKeywords;