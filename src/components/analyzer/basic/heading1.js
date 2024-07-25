/*
WordPress sites usually insert the page or post title as an H1 tag (although custom themes can change this behavior).

Ensure your most important keywords appear in the H1 tag - don't force it, use them in a natural way that makes sense to human readers.

Because your headline plays a large role in reader engagement, it's worth spending extra time perfecting it. 
Many top copywriters spend hours getting their headlines just right - sometimes they spend longer on the headline than the rest of the article!

A good headline stimulates reader interest and offers a compelling reason to read your content. 
It promises a believable benefit.

You should write as if your readers are selfish people with short attention spans (because that describes a large percentage of the world's population). 
Readers visit websites for selfish reasons - they're not there to make you happy.
*/

import StoreArray from "../../storer/storer.js";

function CheckH1(dom)
{
    const checkH1Obj = {};
    var checkH1Array = [];
    const h1Elements = dom.window.document.querySelectorAll('h1');
    checkH1Array = StoreArray(h1Elements);
    if(h1Elements !== null)
    {
        if(h1Elements.length === 1)
            {
                checkH1Obj['status'] = 'positive';
                checkH1Obj['description'] = 'Only one H1 element found';
            }
        
        else
        {
            checkH1Obj['status'] = 'negative';
            checkH1Obj['description'] = 'There are more than one H1 element';
        }
    }
    
    else
    {
        checkH1Obj['status'] = 'negative';
        checkH1Obj['description'] = 'No H1 element found';
    }

    checkH1Obj['instances'] = checkH1Array;
    return checkH1Obj;
}

export default CheckH1;