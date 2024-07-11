function CheckDescription(dom)
{
    const metaDescription = dom.window.document.querySelector("meta[name='description']");
    
    if(metaDescription !== null && metaDescription.hasAttribute("content"))
    {
        const descriptionContent = dom.window.document.querySelector("meta[name='description']").getAttribute("content");
        if(descriptionContent.length > 40 && descriptionContent.length < 80)
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