function CheckH1(dom)
{
    const h1Elements = dom.window.document.querySelectorAll('h1');
    if(h1Elements !== null)
    {
        if(h1Elements.length === 1)
        {
            return 'positive';
        }
        else
        {
            return 'negative - h1 more than one';
        }
    }
    else
    {
        return 'negative - h1 not found';
    }
}

export default CheckH1;