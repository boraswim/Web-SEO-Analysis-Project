function StoreArray(tagElements)
{
    let storeArray = [];
    for(let i = 0; i < tagElements.length; i++)
    {
        storeArray[i] = tagElements[i].textContent;
    }
    return storeArray;
}

export default StoreArray;