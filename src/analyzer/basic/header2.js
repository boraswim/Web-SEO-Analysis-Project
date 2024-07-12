/*
Make sure you have a good balance of H2 tags to plain text in your content. 
Break the content down into logical sections, and use headings to introduce each new topic.

Also, try to include synonyms and relevant terminology in H2 tag text. 
Search engines are pretty smart - they know which words usually occur together in each niche.

It should be easy to include your main and supporting keywords in the H2 tags - after all, these keywords describe your content! 
If it's hard to work the keywords into your subheadings, it could be a sign that the keywords aren't closely related to your content.

Don't try to force keywords into sub-headings if they feel unnatural. 
It will send the wrong message to your readers, possibly driving them away.
*/

function CheckH2(dom)
{
    const h2Elements = dom.window.document.querySelectorAll('h2');
    if(h2Elements !== null)
    {
        if(h2Elements.length >= 1 && h2Elements.length < 4){return 'positive';}
        
        else{return 'negative - h2 more than three';}
    }
    
    else{return 'negative - h2 not found';}
}

export default CheckH2;