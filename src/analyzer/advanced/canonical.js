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