/*
Every page on your site should have a \ tag with a 'rel="canonical"' attribute. 
The link tag should go inside the page's head tag, and it should contain the page's "correct" URL.

If you've republished an article from another source (such as another site or a different section of your own site) then you need to pick which URL is the "correct" one and use that!
*/

function CheckCanonicalLink(dom)
{
    const checkCanonicalLinkObj = {};
    const checkCanonicalLinkArray = [];
    const canonicalLink = dom.window.document.querySelector("link[rel='canonical']");
    if(canonicalLink !== null)
    {
        checkCanonicalLinkArray[0] = canonicalLink;
        if(canonicalLink.getAttribute("href") === dom.window.location.href)
            {
                checkNoIndexObj['status'] = 'positive';
                checkNoIndexObj['description'] = 'canonical link matches root url';
            }
        
        else
        {
            checkNoIndexObj['status'] = 'negative';
            checkNoIndexObj['description'] = 'canonical link does not match root url';
        }
    }
    
    else
    {
        checkNoIndexObj['status'] = 'negative';
        checkNoIndexObj['description'] = 'canonical link not found';
    }

    checkCanonicalLinkObj["instances"] = checkCanonicalLinkArray;
    return checkCanonicalLinkObj;
}

export default CheckCanonicalLink;