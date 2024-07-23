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
    const inlineStylesArray = [];
    const internalStyles = dom.window.document.querySelectorAll('style');
    const internalStylesArray = [];
    for(var i = 0; i < inlineStyles.length; i++)
    {
        if(inlineStyles[i].getAttribute('style').includes(' '))
            {
                inlineStylesArray[inlineStylesArray.length] = inlineStyles[i].outerHTML;
            }
    }

    checkCssMinifyArray[0] = inlineStylesArray;
    
    for(var i = 0; i < internalStyles.length; i++)
    {
        if(internalStyles[i].innerHTML.includes(' '))
            {
                internalStylesArray[internalStylesArray.length] = internalStyles[i].outerHTML;
            }
    }

    checkCssMinifyArray[1] = internalStylesArray;

    if(internalStylesArray.length !== 0 && inlineStylesArray.length !== 0)
    {
        checkCssMinifyObj['status'] = 'negative';
        checkCssMinifyObj['description'] = 'not all css files are minified';
    }
    
    checkCssMinifyObj["instances"] = checkCssMinifyArray;
    return checkCssMinifyObj;
}

export default CheckCssMinify;