function LinkFilter(linkObj)
{
    var filteredObj = {};
    var filteredObj = linkObj;
        if(filteredObj["href"].startsWith("/"))
            {
                filteredObj["status"] = "relative";
            }
        else if(filteredObj["href"]==="")
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
    var scriptObj = {};
    var filteredObj = scriptObj;
        if(filteredObj["script"] !== "")
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