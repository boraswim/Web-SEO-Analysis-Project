"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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

    // Warning: 'Each child in a list should have a unique "key" prop'???

    return(
        <div>
        <div className='border-bottom border-3'>
        <h1>Showing results for <i>{scrapeUrl}</i></h1>
        <input type='button' value="Re-fetch" onClick={() => setFetched(fetched + 1)}/>
        </div>
        <div className='position-absolute top-50 start-50 translate-middle bg-light w-75 h-75 overflow-y-scroll overflow-x-hidden border border-3'>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="overview" title="Overview" selected>
            <h3>Overview Tab</h3>
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
                <ul>
                {result.links.map((item, index) => {
                    return TraverseKeys(item, index);
                })}
                </ul>
            </Tab>
            <Tab eventKey="scripts" title="Scripts">
            <h3>Scripts Tab ({result.scripts.length} scripts in total)</h3>
                <ul>
                {result.scripts.map((item, index) => {
                    return TraverseKeys(item, index);
                })}
                </ul>
            </Tab>
            <Tab eventKey="styles" title="Styles">
            <h3>Styles Tab ({result.styles.length} styles in total)</h3>
                <ul>
                {result.styles.map((item, index) => {
                    return TraverseKeys(item, index);
                })}
                </ul>
            </Tab>
            <Tab eventKey="texts" title="Texts">
                <h3>Texts Tab</h3>
                <p>{result.texts}</p>
            </Tab>
            <Tab eventKey="headings" title="Headings">
                <h3>Headings Tab ({result.headings.length} links in total)</h3>
                <ul>
                {result.headings.map((item, index) => {
                    return TraverseKeys(item, index);
                })}
                </ul>
            </Tab>
            <Tab eventKey="header" title="Header">
            <h3>Header Tab</h3>
            <p>{result.header}</p>
            </Tab>
            <Tab eventKey="metas" title="Metas">
            <h3>Metas Tab ({result.metas.length} links in total)</h3>
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