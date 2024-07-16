import { ScriptFilter } from "../filter/filter.js";

function ParseScript(dom)
{
    const scripts = dom.window.document.scripts;
    const scriptArray = [];
    for(let i = 0; i < scripts.length; i++)
        {
            var scriptObj = {};
            scriptObj["key"] = i + 1;
            for(let j = 0; j < scripts[i].attributes.length; j++)
                {
                    var currentAttr = scripts[i].attributes[j];
                    if(currentAttr.value != ''){
                        var attrName = currentAttr.name;
                        var attrValue = currentAttr.value;
                        scriptObj[attrName] = attrValue;
                    }
                }
            if(scripts[i].innerHTML !== '')
                {
                scriptObj["script"] = scripts[i].innerHTML;
                }
            ScriptFilter(scriptObj);
            scriptArray.push(scriptObj);
        }
    return scriptArray;
}

export default ParseScript;