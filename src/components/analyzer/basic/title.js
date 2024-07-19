/*
Ensure your page's title includes your target keywords, and design it to encourage users to click.

Writing compelling titles is both a science and an art. 
There are automated tools that can analyze your title against known metrics for readability and click-worthiness. 
You also need to understand the psychology of your target audience.
*/

function CheckTitle(dom)
{
    const checkTitleObj = {};
    const checkTitleArray = [];
    const htmlTitle = dom.window.document.title;
    checkTitleArray[0] = htmlTitle;

    if(htmlTitle !== null)
    {
        if(htmlTitle.length > 20 && htmlTitle.length < 40)
            {
            checkTitleObj['status'] = 'positive';
            checkTitleObj['description'] = 'title exists and meets length requirements';
            }
        else
        {
            checkTitleObj['status'] = 'negative';
            checkTitleObj['description'] = 'title length does not meet requirements';
        }
    }

    else
    {
        checkTitleObj['status'] = 'negative';
        checkTitleObj['description'] = 'title not found';
    }

    return checkTitleObj;
}

export default CheckTitle;