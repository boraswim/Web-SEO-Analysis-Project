"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Page()
{
    const [fetched, setFetched] = useState(1);
    const [result, setResult] = useState({
        basic:  {},
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
        <h1>Showing results for <i>{analyzeUrl}</i></h1>
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
            <ul>
                {
                    Object.keys(result.basic).map((key, index)=>(
                        <li key={index}>{key}: {result.basic[key]}</li>
                    ))
                }
            </ul>
            </Tab>
            <Tab eventKey="advanced" title="Advanced">
            <h3>Advanced Tab</h3>
            <ul>
            {
                Object.keys(result.advanced).map((key, index)=>(
                    <li key={index}>{key}: {result.advanced[key]}</li>
                ))
            }
                </ul>
            </Tab>
            <Tab eventKey="performance" title="Performance">
            <h3>Performance Tab</h3>
            <ul>
            {
                Object.keys(result.performance).map((key, index)=>(
                    <li key={index}>{key}: {result.performance[key]}</li>
                ))
            }
                </ul>
            </Tab>
            <Tab eventKey="security" title="Security">
            <h3>Security Tab</h3>
            <ul>
                    {
                        Object.keys(result.security).map((key, index)=>(
                            <li key={index}>{key}: {result.security[key]}</li>
                        ))             
                    }
            </ul>
            </Tab>

        </Tabs>
        </div>
        </div>
    ); 
}

export default Page;