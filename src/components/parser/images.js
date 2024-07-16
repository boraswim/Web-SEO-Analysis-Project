function ParseImage(dom)
{
    const images = dom.window.document.images;
    const imageArray = [];
    for(let i=0; i< images.length; i++)
        {
            var imageObj = {};
            imageObj["key"] = i + 1;
            for(let j = 0; j < images[i].attributes.length; j++)
            {
               var currentAttr = images[i].attributes[j];
               if(currentAttr.value != ''){
                   var attrName = currentAttr.name;
                   var attrValue = currentAttr.value;
                   imageObj[attrName] = attrValue;
               }
            }
           imageArray.push(imageObj);
        }
    return imageArray;
}

export default ParseImage;