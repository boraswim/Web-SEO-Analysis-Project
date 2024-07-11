/*
Every page on your site should have a \ tag with a 'rel="canonical"' attribute. 
The link tag should go inside the page's head tag, and it should contain the page's "correct" URL.

If you've republished an article from another source (such as another site or a different section of your own site) then you need to pick which URL is the "correct" one and use that!
*/

function CheckCanonicalLink(dom)
{
    const canonicalLink = dom.window.document.querySelector("link[rel='canonical']");
    if(canonicalLink !== null)
    {
        console.log(canonicalLink.getAttribute("href"));
        console.log(dom.window.location.href);
        if(canonicalLink.getAttribute("href") === dom.window.location.href)
        {
            return 'positive';
        }
        else
        {
            return 'negative - wrong canonical link';
        }
    }
    else
    {
        return 'negative - canonical link not found';
    }
}

export default CheckCanonicalLink;