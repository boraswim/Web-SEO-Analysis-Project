import jsdom from 'jsdom';
import CheckTitle from './basic/title.js';
import CheckDescription from './basic/description.js';
import CheckAltText from './basic/alttext.js';
import CheckH1 from './basic/header1.js';
import CheckH2 from './basic/header2.js';
import CheckLink from './basic/link.js';
const { JSDOM } = jsdom;

function AnalyzePage(page)
{
    const dom = new JSDOM(page);
    const analyzeResults = {};

    analyzeResults["title"] = CheckTitle(dom);
    analyzeResults["description"] = CheckDescription(dom);
    analyzeResults["h1"] = CheckH1(dom);
    analyzeResults["h2"] = CheckH2(dom);
    analyzeResults["alttext"] = CheckAltText(dom);
    analyzeResults["link"] = CheckLink(dom);

    console.log(analyzeResults);
    return analyzeResults;
}

export default AnalyzePage;