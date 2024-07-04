function ParseMeta(dom)
{
    const metas = dom.window.document.querySelectorAll('meta');
    const metaArray = [];
    for(let i = 0; i < metas.length; i++)
        {
            var metaObj = {};
            metaObj["key"] = i + 1;
            for(let j = 0; j < metas[i].attributes.length; j++)
                {
                    var currentAttr = metas[i].attributes[j];
                    var attrName = currentAttr.name;
                    var attrValue = currentAttr.value;
                    metaObj[attrName] = attrValue;
                }
            metaArray.push(metaObj);
        }
    return metaArray;
}

export default ParseMeta;