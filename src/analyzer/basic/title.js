function CheckTitle(dom)
{
    const htmlTitle = dom.window.document.title;
    if(htmlTitle !== null)
    {
        if(htmlTitle.length > 20 && htmlTitle.length < 40)
        {
            return 'positive';
        }
        else
        {
            return 'negative - title length';
        }
    }
    else
    {
        return 'negative - title not found';
    }
}

export default CheckTitle;