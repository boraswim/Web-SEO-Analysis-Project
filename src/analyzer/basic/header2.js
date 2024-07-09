function CheckH2(dom)
{
    const h2Elements = dom.window.document.querySelectorAll('h2');
    if(h2Elements !== null)
    {
        if(h2Elements.length > 1 && h2Elements.length < 4)
        {
            return 'positive';
        }
        else
        {
            return 'negative - h2 more than three';
        }
    }
    else
    {
        return 'negative - h2 not found';
    }
}

export default CheckH2;