/*
JavaScript files appear in many places, including frameworks (like Bootstrap), themes and templates, and third-party plugins.

We recommend tracking down where the un-minified JavaScript files come from.

There are server-side tools (including WordPress plugins) to automatically minify JavaScript files.
*/

function CheckJsMinify(dom)
{
    const checkJsMinifyObj = {};
    const checkJsMinifyArray = [];

    const scripts = dom.window.document.scripts;

    checkJsMinifyObj['status'] = 'positive';
    checkJsMinifyObj['description'] = 'all js files are minified';

    for(var i = 0; i < scripts.length; i++)
    {
        if(scripts[i].innerHTML.includes(' '))
            {
                checkJsMinifyArray[checkJsMinifyArray.length] = scripts[i].innerHTML;
                checkJsMinifyObj['status'] = 'negative';
                checkJsMinifyObj['description'] = 'not all js files are minified';
            }
    }
    
    checkJsMinifyObj["instances"] = checkJsMinifyArray;
    return checkJsMinifyObj;
}

export default CheckJsMinify;