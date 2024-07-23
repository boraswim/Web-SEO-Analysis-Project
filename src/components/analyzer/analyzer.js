import jsdom from 'jsdom';

import CheckTitle from './basic/title.js';
import CheckDescription from './basic/description.js';
import CheckAltText from './basic/alttext.js';
import CheckH1 from './basic/heading1.js';
import CheckH2 from './basic/heading2.js';
import CheckLinks from './basic/links.js';
import CheckKeywords from './basic/keywords.js';

import CheckCanonicalLink from './advanced/canonical.js';
import CheckNoIndexHeader from './advanced/noindex.js';
import CheckRedirect from './advanced/redirect.js';
import CheckRobots from './advanced/robots.js';
import CheckOpenGraph from './advanced/opengraph.js';

import CheckExpiresHeader from './performance/expires.js';
import CheckJsMinify from './performance/jsminify.js';
import CheckCssMinify from './performance/cssminify.js';
import CheckRequests from './performance/requests.js';
import CheckPageSize from './performance/pagesize.js';
import CheckResponseTime from './performance/responsetime.js';

import CheckDirectoryListing from './security/directorylisting.js';
import CheckSsl from './security/ssl.js';

const { JSDOM } = jsdom;

function AnalyzePage(page, headers, analyzeUrl, responseTime)
{
    const dom = new JSDOM(page, {
        url: analyzeUrl
    });

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
    basicResults["link"] = CheckLinks(dom);
    basicResults["keyword"] = CheckKeywords(dom);
    analyzeResults["basic"] = basicResults;

    advancedResults["canonical"] = CheckCanonicalLink(dom);
    advancedResults["noindex"] = CheckNoIndexHeader(dom);
    advancedResults["redirect"] = CheckRedirect(dom);       // FIX SENDING REQUESTS INSIDE FUNCTIONS
    advancedResults["robots"] = CheckRobots(dom);           // FIX SENDING REQUESTS INSIDE FUNCTIONS
    advancedResults["opengraph"] = CheckOpenGraph(dom);
    analyzeResults["advanced"] = advancedResults;

    performanceResults["expires"] = CheckExpiresHeader(headers);
    performanceResults["jsminify"] = CheckJsMinify(dom);
    performanceResults["cssminify"] = CheckCssMinify(dom);
    performanceResults["requests"] = CheckRequests(dom);    // FIX SENDING REQUESTS INSIDE FUNCTIONS
    performanceResults["size"] = CheckPageSize(dom);
    performanceResults["response"] = CheckResponseTime(responseTime);
    analyzeResults["performance"] = performanceResults;

    securityResults["directorylisting"] = CheckDirectoryListing(dom);   // FIX SENDING REQUESTS INSIDE FUNCTIONS
    securityResults["ssl"] = CheckSsl(dom);
    analyzeResults["security"] = securityResults;

    console.log(analyzeResults);
    return analyzeResults;
}

export default AnalyzePage;