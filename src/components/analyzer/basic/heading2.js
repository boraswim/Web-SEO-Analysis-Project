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
    const checkH2Obj = {};
    const checkH2Array = [];
    const h2Elements = dom.window.document.querySelectorAll('h2');
    checkH2Array = h2Elements;

    if(h2Elements !== null)
    {
        if(h2Elements.length >= 1 && h2Elements.length < 4)
            {
                checkH2Obj['status'] = 'positive';
                checkH2Obj['description'] = 'h2 elements exist within the expected amount range';
            }
        
        else
        {
            checkH2Obj['status'] = 'negative';
            checkH2Obj['description'] = 'h2 more than three';
        }
    }
    
    else
    {
        checkH2Obj['status'] = 'negative';
        checkH2Obj['description'] = 'no h2 found';
    }

    checkH2Obj['instances'] = checkH2Array;
    return checkH2Obj;
}

export default CheckH2;