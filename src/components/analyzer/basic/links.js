/*
Add links to external resources that are useful for your readers. 
Make sure you link to high-quality sites - Google penalizes pages that link to "spammy" sites (ones that break the Google webmaster guidelines).

Ideally, the links should be highly relevant to the subject you're writing about. 
It's impossible to cover every aspect of a subject on a single page, but your readers may be fascinated by some detail you barely touch on. 
If you link to a resource where they can learn more, they'll be grateful. What's more, you'll be rewarded with higher rankings!
*/

function CheckLinks(dom)
{
    const checkLinksObj = {};
    const checkLinksArray = [];
    var absoluteLinks = [];
    var relativeLinks = [];
    var badLinks = [];
    const linkElements = dom.window.document.links;
    for(var i = 0; i < linkElements.length; i++)
    {
        if(linkElements[i].getAttribute("href").startsWith('/'))
            {
                relativeLinks[relativeLinks.length] = linkElements[i].getAttribute("href");
            }
        
        else if(linkElements[i].getAttribute("href")===null)
            {
                badLinks[badLinks.length] = linkElements[i].getAttribute("href");
            }
        
        else
            {
                absoluteLinks[absoluteLinks.length] = linkElements[i].getAttribute("href");
            }

        checkLinksArray[0] = relativeLinks;
        checkLinksArray[1] = badLinks;
        checkLinksArray[2] = absoluteLinks;
    }
    checkLinksObj["instances"] = checkLinksArray;

    if(absoluteLinks.length > 0 && relativeLinks.length > 0 && badLinks.length <= 0)
        {
            checkLinksObj["status"] = "positive";
            checkLinksObj["description"] = "absolute and relative links found";
        }
        
    else if(absoluteLinks.length > 0 && relativeLinks.length > 0 && badLinks.length > 0)
        {
            checkLinksObj["status"] = "negative";
            checkLinksObj["description"] = "bad links found";
        }

    else
        {
            checkKeywordObj["status"] = "negative";
            checkKeywordObj["description"] = "no links found";
        }

    return checkLinksObj;
}

export default CheckLinks;