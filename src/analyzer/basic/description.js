function CheckDescription(dom)
{
    if(dom.window.document.querySelector("meta[name='description']").hasAttribute("content"))
    {
        const metaDescription = dom.window.document.querySelector("meta[name='description']").getAttribute("content");
        if(metaDescription.length > 40 && metaDescription.length < 80)
            {
                return 'positive';
            }
            else
            {
                return 'negative - description length';
            }
    }
    else
    {
        return 'negative - description not found';
    }
}

export default CheckDescription;