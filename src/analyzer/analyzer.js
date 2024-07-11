import jsdom from 'jsdom';
import CheckTitle from './basic/title.js';
import CheckDescription from './basic/description.js';
import CheckAltText from './basic/alttext.js';
import CheckH1 from './basic/header1.js';
import CheckH2 from './basic/header2.js';
import CheckLink from './basic/link.js';
import CheckCanonicalLink from './advanced/canonical.js';
const { JSDOM } = jsdom;

function AnalyzePage(page)
{
    const dom = new JSDOM(page);
    
    const analyzeResults = {};
    const basicResults = {};
    const advancedResults = {};
    const performanceResults = {};
    const securityResults = {};

    basicResults["title"] = CheckTitle(dom);
    basicResults["description"] = CheckDescription(dom);
    basicResults["h1"] = CheckH1(dom);
    basicResults["h2"] = CheckH2(dom);
    basicResults["alttext"] = CheckAltText(dom);
    basicResults["link"] = CheckLink(dom);
    analyzeResults["basic"] = basicResults;

    advancedResults["canonical"] = CheckCanonicalLink(dom);
    analyzeResults["advanced"] = advancedResults;

    analyzeResults["performance"] = performanceResults;

    analyzeResults["security"] = securityResults;

    console.log(analyzeResults);
    return analyzeResults;
}

export default AnalyzePage;