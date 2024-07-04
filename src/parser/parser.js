import jsdom from 'jsdom';
import { text } from 'express';
import ParseHeader from './header.js';
import ParseHeading from './headings.js';
import ParseImage from './images.js';
import ParseLink from './links.js';
import ParseMeta from './metas.js';
import ParseScript from './scripts.js';
import ParseStyle from './styles.js';
import ParseText from './text.js';

const { JSDOM } = jsdom;

function ParseElements(page)
{
        const parsedElements = {};
        const dom = new JSDOM(page);

        let imageArray = ParseImage(dom);
        parsedElements["images"] = imageArray;

        let linkArray = ParseLink(dom);
        parsedElements["links"] = linkArray;

        let scriptArray = ParseScript(dom);
        parsedElements["scripts"] = scriptArray;

        let styleArray = ParseStyle(dom);
        parsedElements["styles"] = styleArray;

        let text = ParseText(dom);
        parsedElements["texts"] = text;

        let headingArray = ParseHeading(dom);
        parsedElements["headings"] = headingArray;

        let header = ParseHeader(dom);
        parsedElements["header"] = header;

        let metaArray = ParseMeta(dom);
        parsedElements["metas"] = metaArray;

        return parsedElements;
    }

export default ParseElements;