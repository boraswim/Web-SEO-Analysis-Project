function LinkFilter(linkObj)
{
    var filteredObj = {};
    var filteredObj = linkObj;
        if(filteredObj["href"].startsWith('/'))
            {
                filteredObj["status"] = "relative";
            }
        else if(filteredObj["href"]===undefined)
            {
                filteredObj["status"] = "bad";
            }
        else
            {
                filteredObj["status"] = "absolute";
            }
    return filteredObj;
}

function ScriptFilter(scriptObj)
{
    var filteredObj = {};
    var filteredObj = scriptObj;
        if(filteredObj["script"] !== undefined)
            {
                filteredObj["status"] = "internal";
            }
        else
            {
                filteredObj["status"] = "external";
            }
    return filteredObj;
}

export {LinkFilter, ScriptFilter};