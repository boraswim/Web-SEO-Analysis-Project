/*
Ensure your page's title includes your target keywords, and design it to encourage users to click.

Writing compelling titles is both a science and an art. 
There are automated tools that can analyze your title against known metrics for readability and click-worthiness. 
You also need to understand the psychology of your target audience.
*/

function CheckTitle(dom)
{
    const htmlTitle = dom.window.document.title;
    if(htmlTitle !== null)
    {
        if(htmlTitle.length > 20 && htmlTitle.length < 40){return 'positive';}
        
        else{return 'negative - title length';}
    }

    else{return 'negative - title not found';}
}

export default CheckTitle;