function ParseStyle(dom)
{
    let styleArray = [];
    const inlineStyles = dom.window.document.querySelectorAll('[style]');
    const internalStyles = dom.window.document.querySelectorAll('style');
    const externalStyles = dom.window.document.querySelectorAll('[rel|="stylesheet"]');
    for(let i = 0; i < inlineStyles.length; i++)
        {
            styleArray.push({key:i+1, status:"inline", css:inlineStyles[i].style.cssText});
        }
        for(let i = 0; i < internalStyles.length; i++)
        {
                styleArray.push({key:styleArray.length+1, status:"internal", css:internalStyles[i].innerHTML});
        }
        for(let i = 0; i < externalStyles.length; i++)
        {
                styleArray.push({key:styleArray.length+1, status:"external", css:externalStyles[i].href});
        }
        return styleArray;
}

export default ParseStyle;