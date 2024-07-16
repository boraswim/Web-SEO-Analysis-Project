/*
If you want to continue to improve your response time, the simplest and fastest fix is to use a caching plugin. 
Caching plugins keep a cached version of each page on your site. 
Instead of building the page from scratch, the server will send the cached copy.

You can get an even greater boost in speed with a content delivery network service. 
These services host a copy of your content on multiple servers spread out across the globe. 
A user's request is handled by the edge server that's closest to their physical location, so the content arrives incredibly fast.
*/

function CheckResponseTime(responseTime)
{
    const responseTimeInSeconds = responseTime / 100;
    if(responseTimeInSeconds > 0.2){return "negative - load time longer than 0.2 seconds";}

    else{return "positive";}
}

export default CheckResponseTime;