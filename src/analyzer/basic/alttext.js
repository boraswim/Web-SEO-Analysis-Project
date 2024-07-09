function CheckAltText(dom)
{
    const imgElements = dom.window.document.images;
    if(imgElements !== null)
    {
        for(var i = 0; i < imgElements.length; i++)
        {
            if(imgElements[i].getAttribute("alt") !== undefined)
            {
                continue;
            }
            else
            {
                return 'negative - alttext not found';
            }
        }
    }
    else
    {
        return 'negative - image not found';
    }

    return 'positive';
}

export default CheckAltText;