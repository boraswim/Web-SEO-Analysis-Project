/*
Add links to external resources that are useful for your readers. 
Make sure you link to high-quality sites - Google penalizes pages that link to "spammy" sites (ones that break the Google webmaster guidelines).

Ideally, the links should be highly relevant to the subject you're writing about. 
It's impossible to cover every aspect of a subject on a single page, but your readers may be fascinated by some detail you barely touch on. 
If you link to a resource where they can learn more, they'll be grateful. What's more, you'll be rewarded with higher rankings!
*/

function CheckLinks(dom)
{
    var absoluteLinks = 0;
    var relativeLinks = 0;
    var badLinks = 0;
    const linkElements = dom.window.document.links;
    for(var i = 0; i < linkElements.length; i++)
    {
        if(linkElements[i].getAttribute("href").startsWith('/')){relativeLinks++;}
        
        else if(linkElements[i].getAttribute("href")===null){badLinks++;}
        
        else{absoluteLinks++;}
    }

    if(absoluteLinks > 0 && relativeLinks > 0){return 'positive';}
        
    else{return 'negative - links not found';}
}

export default CheckLinks;