/*
Make sure that you only block parts you don't want to be indexed.

You can manually create a robots.txt file and upload it to your site's web root. 
A simpler option is to use a plugin for your CMS platform.
*/

import ScrapeUrl from "../../scrape.js";

function CheckRobots(dom)
{
    var robots;
    console.log("origin:" + dom.window.location.origin);
    ScrapeUrl(dom.window.location.origin + '/robots.txt')
    .then(function(result){
        robots = result;
    })
    console.log(robots);
    if(robots !== null)
    {
        return "positive";
    }
    else
    {
        return "empty";
    }
}

export default CheckRobots;