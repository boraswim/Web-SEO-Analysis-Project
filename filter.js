function LinkFilter(linkObj)
{
    var filteredObj = {};
    var filteredObj = linkObj;
        if(filteredObj["href"].startsWith("/"))
            {
                filteredObj["status"]="relative";
            }
        else if(filteredObj["href"]=="")
            {
                filteredObj["status"]="bad";
            }
        else
            {
                filteredObj["status"]="absolute";
            }
    return filteredObj;
}
export default LinkFilter;