/*
Fortunately, every popular web server has options to prevent directory listings. 
They'll show a "403 forbidden" message instead.

Alternatively, you can create an empty index.php file and save it in every directory on your site. 
That's an approach that WordPress uses and it works well.
*/

function CheckDirectoryListing(dom)
{
    return "empty";
}

export default CheckDirectoryListing;