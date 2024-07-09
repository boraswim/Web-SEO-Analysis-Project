function CheckLink(dom)
{
    var absoluteLinks = 0;
    var relativeLinks = 0;
    var badLinks = 0;
    const linkElements = dom.window.document.links;
    for(var i = 0; i < linkElements.length; i++)
    {
        if(linkElements[i].getAttribute("href").startsWith('/'))
        {
            relativeLinks++;
        }
        else if(linkElements[i].getAttribute("href")===null)
        {
            badLinks++;
        }
        else
        {
            absoluteLinks++;
        }
    }

    if(absoluteLinks > 0 && relativeLinks > 0)
        {
            return 'positive';
        }
        else
        {
            return 'negative - links not found';
        }
}

export default CheckLink