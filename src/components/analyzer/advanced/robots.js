/*
Make sure that you only block parts you don't want to be indexed.

You can manually create a robots.txt file and upload it to your site's web root. 
A simpler option is to use a plugin for your CMS platform.
*/

import ScrapeUrl from "../../scraper/scraper.js";

// Async function does not work in base analyzer function
async function CheckRobots(dom)
{
    /*
    var robots;
    ScrapeUrl(dom.window.location.origin + '/robots.txt')
    .then((result) => {
        robots = result.data;
    })

    if(robots !== undefined)
    {
        return "positive";
    }
    else
    {
        return "negative - robots.txt not found";
    }
    */
   return "empty";
}

export default CheckRobots;