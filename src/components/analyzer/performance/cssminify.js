/*
CSS files appear in many places, including frameworks (like Bootstrap), themes and templates, and third-party plugins.

We recommend tracking down where the un-minified CSS files come from.

There are server-side tools (including WordPress plugins) to automatically minify CSS files.
*/

function CheckCssMinify(dom)
{
    const inlineStyles = dom.window.document.querySelectorAll('[style]');
    const internalStyles = dom.window.document.querySelectorAll('style');
    for(var i = 0; i < inlineStyles.length; i++)
    {
        if(inlineStyles[i].getAttribute('style').includes(' ')){return "negative - there are unminified css files";}
    }
    
    for(var i = 0; i < internalStyles.length; i++)
    {
        if(internalStyles[i].innerHtml.includes(' ')){return "negative - there are unminified css files";}
    }
    
    return "positive";
}

export default CheckCssMinify;