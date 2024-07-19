/*
CSS files appear in many places, including frameworks (like Bootstrap), themes and templates, and third-party plugins.

We recommend tracking down where the un-minified CSS files come from.

There are server-side tools (including WordPress plugins) to automatically minify CSS files.
*/

function CheckCssMinify(dom)
{
    const checkCssMinifyObj = {};
    const checkCssMinifyArray = [];

    checkCssMinifyObj['status'] = 'positive';
    checkCssMinifyObj['description'] = 'all css files are minified';

    const inlineStyles = dom.window.document.querySelectorAll('[style]');
    const internalStyles = dom.window.document.querySelectorAll('style');
    for(var i = 0; i < inlineStyles.length; i++)
    {
        if(inlineStyles[i].getAttribute('style').includes(' '))
            {
                checkCssMinifyArray[checkCssMinifyArray.length] = inlineStyles[i];
                checkCssMinifyObj['status'] = 'negative';
                checkCssMinifyObj['description'] = 'not all css files are minified';
            }
    }
    
    for(var i = 0; i < internalStyles.length; i++)
    {
        if(internalStyles[i].innerHTML.includes(' '))
            {
                checkCssMinifyArray[checkCssMinifyArray.length] = internalStyles[i];
                checkCssMinifyObj['status'] = 'negative';
                checkCssMinifyObj['description'] = 'not all css files are minified';
            }
    }
    
    checkCssMinifyObj["instances"] = checkCssMinifyArray;
    return checkCssMinifyObj;
}

export default CheckCssMinify;