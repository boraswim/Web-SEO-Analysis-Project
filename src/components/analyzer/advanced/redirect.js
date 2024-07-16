/*
Decide whether you want your site's URLs to include a "www", or if you prefer a plain domain name. 
There are marketing pros and cons for each choice, but neither one is better or worse for SEO purposes - as long as you're consistent.

You should use HTTP redirections (301 permanant redirects) to pass PageRank from the "wrong" URLs to the standard (canonical) ones. 
That way, your content will still benefit from backlinks if someone makes a mistake and uses the wrong URL.
*/

function CheckRedirect(dom)
{
    return "empty";
}

export default CheckRedirect;