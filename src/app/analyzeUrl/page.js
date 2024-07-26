"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Page()
{
    var basicCount = 0, advancedCount = 0, performanceCount = 0, securityCount = 0;
    const [fetched, setFetched] = useState(1);
    const [result, setResult] = useState({
        basic: {title: {status: '', instances: ['']}, description: {status: '', instances: ['']}, heading1: {status: '', instances: ['']}, heading2: {status: '', instances: ['']}, alttext: {status: '', instances: ['']}, keywords: {status: '', instances: ['']}, links: {status: '', instances: [[''], [''], ['']]}},
        advanced: {canonical: {status: '', instances: ['']}, noindex: {status: '', instances: ['']}, opengraph: {status: '', instances: ['']}},
        performance: {expires: {status: '', instances: ['']}, jsminify: {status: '', instances: ['']}, cssminify: {status: '', instances: ['']}, size: {status: '', instances: ['']}, response: {status: '', instances: ['']}},
        security: {ssl: {status: '', instances: ['']}}
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

    Object.keys(result).forEach(key => {
        Object.keys(result[key]).forEach(subKey => {
            if(result[key][subKey].status === 'positive')
            {
                if(key === 'basic')
                {
                    basicCount++;
                }

                else if(key === 'advanced')
                {
                    advancedCount++;
                }

                else if(key === 'performance')
                {
                    performanceCount++;
                }

                else if(key === 'security')
                {
                    securityCount++;
                }
            }
        });
    });

    var totalCount = basicCount + advancedCount + performanceCount + securityCount;


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
            <hr/>
            <h4>{totalCount} of 16 tests were successful.</h4>
            <br/>
            <h4>The success rate is {totalCount / 16 * 100}%.</h4>
            <hr/>
            <h4>{basicCount} out of 7 basic analyzes successful</h4>
            <h4>{advancedCount} out of 3 advanced analyzes successful</h4>
            <h4>{performanceCount} out of 5 performance analyzes successful</h4>
            <h4>{securityCount} out of 1 security analyzes successful</h4>
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
            <hr/>

            <h4>Canonical - {result.advanced.canonical.status}</h4>
            <ul>
                <li>{result.advanced.canonical.instances[0]}</li>
            </ul>
            <h5>{result.advanced.canonical.description}.</h5>
            <hr/>

            <h4>Noindex - {result.advanced.noindex.status}</h4>
            <ul>
                {result.advanced.noindex.instances.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
            </ul>
            <h5>{result.advanced.noindex.description}.</h5>
            <hr/>

            <h4>Opengraph - {result.advanced.opengraph.status}</h4>
            <ul>
                {result.advanced.opengraph.instances.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
            </ul>
            <h5>{result.advanced.opengraph.instances.length} {result.advanced.opengraph.description}.</h5>
            <hr/>

            </Tab>
            <Tab eventKey="performance" title="Performance">
            <h3>Performance Tab</h3>
            <hr/>
            
            <h4>Expires - {result.performance.expires.status}</h4>
            <ul>
                {result.performance.expires.instances.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
            </ul>
            <h5>{result.performance.expires.description}.</h5>
            <hr/>
            
            <h4>Jsminify - {result.performance.jsminify.status}</h4>
            <ul>
                {result.performance.jsminify.instances.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
            </ul>
            <h5>{result.performance.jsminify.description}.</h5>
            <hr/>

            <h4>Cssminify - {result.performance.expires.status}</h4>
            <ul>
                {result.performance.cssminify.instances.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
            </ul>
            <h5>{result.performance.cssminify.description}.</h5>
            <hr/>

            <h4>Size - {result.performance.size.status}</h4>
            <ul>
                <li>{result.performance.size.instances[0]} kilobytes</li>
            </ul>
            <h5>{result.performance.size.description}.</h5>
            <hr/>

            <h4>Response - {result.performance.response.status}</h4>
            <ul>
                <li>{result.performance.response.instances[0]} seconds</li>
            </ul>
            <h5>{result.performance.response.description}.</h5>

            </Tab>
            <Tab eventKey="security" title="Security">
            <h3>Security Tab</h3>
            <hr/>

            <h4>Ssl - {result.security.ssl.status}</h4>
            <ul>
                <li>{result.security.ssl.instances[0]}</li>
            </ul>
            <h5>{result.security.ssl.description}.</h5>

            </Tab>

        </Tabs>
        </div>
        </div>
    ); 
}

export default Page;