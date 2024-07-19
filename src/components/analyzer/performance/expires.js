/*
If you use the Apache or NGINX web servers, you can edit the configuration files to set the "expires" header for all image files. 
For Apache, you can also use a ".htaccess" file to change the settings for each folder.

Alternatively, you can use a CMS plugin to simplify the process - it's a more user-friendly option. 
WordPress has a host of caching plugins, and most of them give you options to control the caching headers.
*/

function CheckExpiresHeader(headers)
{
    const checkExpiresHeaderObj = {};
    const checkExpiresHeaderArray = [];

    if('expires' in headers)
        {
            checkExpiresHeaderArray[0] = headers.expires;
            checkExpiresHeaderObj['status'] = 'positive';
            checkExpiresHeaderObj['description'] = 'expires header found';
        }
    
    else
        {
            checkExpiresHeaderObj['status'] = 'negative';
            checkExpiresHeaderObj['description'] = 'expires header not found';
        } 
    
    checkExpiresHeaderObj["instances"] = checkExpiresHeaderArray;
    return checkExpiresHeaderObj;
}

export default CheckExpiresHeader;