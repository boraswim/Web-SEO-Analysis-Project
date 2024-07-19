/*
In order to reduce page size, remove any unnecessary tags from your markup. 
This includes developer comments, which are invisible to your users - search engines ignore the text in comments, too.

Sometimes inline CSS is a culprit. 
A little inline CSS can help your page render faster. 
Too much will bloat the HTML file and increase the page loading time.

You can reduce CSS repetition with HTML class and ID attributes. 
Often the same rules will be repeated across many page elements, embedded in each tag's "style" attribute. 
You can extract them into a single "style" tag and use classes and ID's to target each element.

Removing white space can also have an impact on your HTML page's size. 
White space characters like carriage returns and tabs are ignored by the browser, but they make the markup easier for developers to read. 
So you should always strip them from your templates or themes before you use them in a production environment.
*/

function CheckPageSize(dom)
{
    const checkPageSizeObj = {};
    const checkPageSizeArray = [];

    const pageSize = dom.serialize().length / 1000;
    checkPageSizeArray[0] = pageSize;

    if(pageSize > 50)
        {
            checkPageSizeObj['status'] = 'negative';
            checkPageSizeObj['description'] = 'page size bigger than 50kb';
        }

    else
        {
            checkPageSizeObj['status'] = 'positive';
            checkPageSizeObj['description'] = 'page size smaller than 50kb';
        }

    checkPageSizeObj["instances"] = checkPageSizeArray;
    return checkPageSizeObj;
}

export default CheckPageSize;