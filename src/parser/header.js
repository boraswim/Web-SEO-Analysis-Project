function ParseHeader(dom)
{
    const headerContent = dom.window.document.head.innerHTML;
    const header = headerContent;

    return header;
}

export default ParseHeader;