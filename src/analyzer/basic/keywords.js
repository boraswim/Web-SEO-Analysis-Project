/*
You need to use titles and descriptions that are attractive to users and contain your keywords. 
Use the keywords naturally - keyword stuffing is usually detected and will result in a lower ranking. 
What's more, it's pretty off-putting for potential readers, who are more likely to click on an appealing link.
*/

function CheckKeywords(dom)
{
    const keywords = dom.window.document.querySelectorAll("meta[name='keywords, Keywords']");
    const htmlTitle = dom.window.document.title;
    const metaDescription = dom.window.document.querySelector("meta[name='description']");
    var titleHasKeyword, descriptionHasKeyword;
    if(htmlTitle !== null && metaDescription !== null)
    {
        const descriptionContent = metaDescription.getAttribute("content");
        for (var i = 0; i < descriptionContent.length; i++) {
            for(var j = 0; j < keywords.length; j++)
            {
                if(descriptionContent[i] === keywords[j]){descriptionHasKeyword = true;}
            }
        }

        for (var i = 0; i < htmlTitle.length; i++) {
            for(var j = 0; j < keywords.length; j++)
            {
                if(htmlTitle[i] === keywords[j]){titleHasKeyword = true;}
            }
        }

        if(!descriptionHasKeyword && titleHasKeyword){return "negative - description does not include keywords";}
        if(descriptionHasKeyword && !titleHasKeyword){return "negative - title does not include keywords";}
        if(!descriptionHasKeyword && !titleHasKeyword){return "negative - neither description nor title includes keywords";}
        else{return "positive";}
    }
    return "negative - no keywords found";
}

export default CheckKeywords;