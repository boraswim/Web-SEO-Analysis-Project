function ParseText(dom)
{
    var text = "";
    const textClone = dom.window.document.documentElement.cloneNode(true);
    textClone.querySelectorAll('script','style').forEach(element => element.remove());
    const textCloneContent = textClone.textContent.trim();
    text = textCloneContent;
    return text;
}

export default ParseText;