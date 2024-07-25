"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Page()
{
    const [fetched, setFetched] = useState(1);
    const [result, setResult] = useState({
        basic: {title: {status: '', instances: ['']}, description: {status: '', instances: ['']}, heading1: {status: '', instances: ['']}, heading2: {status: '', instances: ['']}, alttext: {status: '', instances: ['']}, keywords: {status: '', instances: ['']}, links: {status: '', instances: [[''], [''], ['']]}},
        advanced: {},
        performance: {},
        security: {},
    });
    const searchParams = useSearchParams();
    const analyzeUrl = searchParams.get('url');
    useEffect(() => {
        fetch(`http://localhost:3000/analyzeUrl?url=${analyzeUrl}`)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(err => console.error(err));
        console.log(`fetched ${fetched} times`);
    }, [fetched]);

    /*
    function TraverseKeys(object)
    {
        var outputTxt ='';
        Object.keys(object).forEach(key => {
            outputTxt = outputTxt + `${key}: ${object[key]}, `;
        });
        return <li className='text-break'>{outputTxt}<hr/></li>;
    }
    */

    return(
        <div>
        <div className='border-bottom border-3'>
        <h1 className='text-nowrap'>Showing results for <i>{analyzeUrl}</i></h1>
        <input type='button' value="Re-fetch" onClick={() => setFetched(fetched + 1)}/>
        fetched {fetched} times
        </div>
        <div className='position-absolute top-50 start-50 translate-middle bg-light w-75 h-75 overflow-y-scroll overflow-x-hidden border border-3'>
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="overview" title="Overview" selected>
            <h3>Overview Tab</h3>
            </Tab>
            <Tab eventKey="basic" title="Basic">
            <h3>Basic Tab</h3>
            <hr/>

            <h4>Title - {result.basic.title.status}</h4>
            <ul>
                <li>{result.basic.title.instances[0]}</li>
            </ul>
            <h5>{result.basic.title.description}. Your title length is {result.basic.title.instances[0].length}.</h5>
            <hr/>

            <h4>Description - {result.basic.description.status}</h4>
            <ul>
                <li>{result.basic.description.instances[0]}</li>
            </ul>
            <h5>{result.basic.description.description}. Your description length is {result.basic.description.instances[0].length}.</h5>
            <hr/>

            <h4>Heading 1 - {result.basic.heading1.status}</h4>
            <ul>
                {result.basic.heading1.instances.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <h5>{result.basic.heading1.description}. Your heading1 count is {result.basic.heading1.instances.length}.</h5>
            <hr/>
            
            <h4>Heading 2 - {result.basic.heading2.status}</h4>
            <ul>
                {result.basic.heading2.instances.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <h5>{result.basic.heading2.description}. Your heading2 count is {result.basic.heading2.instances.length}</h5>
            <hr/>
            
            <h4>Image Alttext - {result.basic.alttext.status}</h4>
            <ul>
                {result.basic.alttext.instances.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
            </ul>
            <h5>{result.basic.alttext.description}. {result.basic.alttext.instances.length} of your images do not have alttext.</h5>
            <hr/>

            <h4>Keywords - {result.basic.keywords.status}</h4>
            <h5>Keywords</h5>
            <ul>
                {result.basic.keywords.instances[0]}
            </ul>
            <h5>Title</h5>
            <ul>
                {result.basic.title.instances[0]}
            </ul>
            <h5>Description</h5>
            <ul>
                {result.basic.description.instances[0]}
            </ul>
            <h5>{result.basic.keywords.description}.</h5>
            <hr/>

            <h4>Links - {result.basic.links.status}</h4>
            <h5>Relative links ({result.basic.links.instances[0].length} total)</h5>
            <ul>
                {result.basic.links.instances[0].map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
            </ul>
            <h5>Bad links ({result.basic.links.instances[1].length} total)</h5>
            <ul>
                {result.basic.links.instances[1].map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
            </ul>
            <h5>Absolute links ({result.basic.links.instances[2].length} total)</h5>
            <ul>
                {result.basic.links.instances[2].map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
            </ul>
            <h5>{result.basic.links.description}.</h5>
            <hr/>

            </Tab>
            <Tab eventKey="advanced" title="Advanced">
            <h3>Advanced Tab</h3>

            </Tab>
            <Tab eventKey="performance" title="Performance">
            <h3>Performance Tab</h3>

            </Tab>
            <Tab eventKey="security" title="Security">
            <h3>Security Tab</h3>

            </Tab>

        </Tabs>
        </div>
        </div>
    ); 
}

export default Page;