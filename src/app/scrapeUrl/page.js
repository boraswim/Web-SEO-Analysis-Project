"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Problem with counting categorized elements on initial page load
var headingArray = [0, 0, 0, 0, 0, 0];
var styleArray = [0, 0, 0];
var scriptArray = [0, 0];
var linkArray = [0, 0, 0];

function Page()
{
    const [fetched, setFetched] = useState(1);
    const [result, setResult] = useState({
        images: [{}],
        links: [{}],
        scripts: [{}],
        styles: [{}],
        texts: "",
        headings: [{}],
        header: "",
        metas: [{}]
    });
    const searchParams = useSearchParams();
    const scrapeUrl = searchParams.get('url');
    useEffect(() => {
        headingArray = [0, 0, 0, 0, 0, 0];
        styleArray = [0, 0, 0];
        scriptArray = [0, 0];
        linkArray = [0, 0, 0];
        fetch(`http://localhost:3000/scrapeUrl?url=${scrapeUrl}`)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(err => console.error(err));
        console.log(`fetched ${fetched} times`);
    }, [fetched]);

    function TraverseKeys(object, index)
    {
        var outputTxt ='';
        Object.keys(object).forEach(key => {
            outputTxt = outputTxt + `${key}: ${object[key]}, `;
        });
        return <li key={index} className='text-break'>{outputTxt}<hr/></li>;
    }

    return(
        <div>
        <div className='border-bottom border-3'>
        <h1>Showing results for <i>{scrapeUrl}</i></h1>
        <input type='button' value="Re-fetch" onClick={() => setFetched(fetched + 1)}/>
        fetched {fetched} times
        </div>
        <div className='position-absolute top-50 start-50 translate-middle bg-light w-75 h-75 overflow-y-scroll overflow-x-hidden border border-3'>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="overview" title="Overview" selected>
            <h3>Overview Tab</h3>
            <p>Page size: {result.size} bytes</p>
            </Tab>
            <Tab eventKey="images" title="Images">
                <h3>Images Tab ({result.images.length} images in total)</h3>
                <ul>
                {result.images.map((item, index) => {
                    return TraverseKeys(item, index)
                })}
                </ul>
            </Tab>
            <Tab eventKey="links" title="Links">
                <h3>Links Tab ({result.links.length} links in total)</h3>
                <h4>Absolute Links ({linkArray[0]} total)</h4>
                <ul>
                {result.links.map((item, index) => {
                    if(item["status"] === "absolute")
                        {
                            linkArray[0]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>Relative links ({linkArray[1]} total)</h4>
                <ul>
                {result.links.map((item, index) => {
                    if(item["status"] === "relative")
                        {
                            linkArray[1]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>Bad links ({linkArray[2]} total)</h4>
                <ul>
                {result.links.map((item, index) => {
                    if(item["status"] === "bad")
                        {
                            linkArray[2]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
            </Tab>
            <Tab eventKey="scripts" title="Scripts">
            <h3>Scripts Tab ({result.scripts.length} scripts in total)</h3>
            <h4>Internal scripts ({scriptArray[0]} total)</h4>
                <ul>
                {result.scripts.map((item, index) => {
                    if(item["status"] === "internal")
                        {
                            scriptArray[0]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>External scripts ({scriptArray[1]} total)</h4>
                <ul>
                {result.scripts.map((item, index) => {
                    if(item["status"] === "external")
                        {
                            scriptArray[1]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
            </Tab>
            <Tab eventKey="styles" title="Styles">
            <h3>Styles Tab ({result.styles.length} styles in total)</h3>
            <h4>In-line styles ({styleArray[0]} total)</h4>
                <ul>
                {result.styles.map((item, index) => {
                    if(item["status"] === "inline")
                        {
                            styleArray[0]++;
                            return TraverseKeys(item, index);
                        }
                    
                })}
                </ul>
                <h4>Internal styles ({styleArray[1]} total)</h4>
                <ul>
                {result.styles.map((item, index) => {
                    if(item["status"] === "internal")
                        {
                            styleArray[1]++;
                            return TraverseKeys(item, index);
                        }
                    
                })}
                </ul>
                <h4>External styles ({styleArray[2]} total)</h4>
                <ul>
                {result.styles.map((item, index) => {
                    if(item["status"] === "external")
                        {
                            styleArray[2]++;
                            return TraverseKeys(item, index);
                        }
                    
                })}
                </ul>
            </Tab>
            <Tab eventKey="texts" title="Texts">
                <h3>Texts Tab</h3>
                <p>{result.texts}</p>
            </Tab>
            <Tab eventKey="headings" title="Headings">
                <h3>Headings Tab ({result.headings.length} headings in total)</h3>
                <h4>H1 headers ({headingArray[0]} total)</h4>
                <ul>
                {result.headings.map((item, index) => {
                    if(item["status"] === "H1")
                    {
                        headingArray[0]++;
                        return TraverseKeys(item, index);
                    }
                })}
                </ul>
                <h4>H2 headers ({headingArray[1]} total)</h4>
                <ul>
                {result.headings.map((item, index) => {
                    if(item["status"] === "H2")
                        {
                            headingArray[1]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>H3 headers ({headingArray[2]} total)</h4>
                <ul>
                {result.headings.map((item, index) => {
                    if(item["status"] === "H3")
                        {
                            headingArray[2]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>H4 headers ({headingArray[3]} total)</h4>
                <ul>
                {result.headings.map((item, index) => {
                    if(item["status"] === "H4")
                        {
                            headingArray[3]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>H5 headers ({headingArray[4]} total)</h4>
                <ul>
                {result.headings.map((item, index) => {
                    if(item["status"] === "H5")
                        {
                            headingArray[4]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
                <h4>H6 headers ({headingArray[5]} total)</h4>
                <ul>
                {result.headings.map((item, index) => {
                    if(item["status"] === "H6")
                        {
                            headingArray[5]++;
                            return TraverseKeys(item, index);
                        }
                })}
                </ul>
            </Tab>
            <Tab eventKey="header" title="Header">
            <h3>Header Tab</h3>
            <p>{result.header}</p>
            </Tab>
            <Tab eventKey="metas" title="Metas">
            <h3>Metas Tab ({result.metas.length} metas in total)</h3>
                <ul>
                {result.metas.map((item, index) => {
                    return TraverseKeys(item, index);
                })}
                </ul>
            </Tab>
        </Tabs>
        </div>
        </div>
    ); 
}

export default Page;