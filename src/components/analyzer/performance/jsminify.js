/*
JavaScript files appear in many places, including frameworks (like Bootstrap), themes and templates, and third-party plugins.

We recommend tracking down where the un-minified JavaScript files come from.

There are server-side tools (including WordPress plugins) to automatically minify JavaScript files.
*/

function CheckJsMinify(dom)
{
    const scripts = dom.window.document.scripts;
    for(var i = 0; i < scripts.length; i++)
    {
        if(scripts[i].innerHTML.includes(' ')){return "negative - there are unminified js files";}
    }
    
    return "positive";
}

export default CheckJsMinify;