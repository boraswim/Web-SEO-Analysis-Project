"use client"

import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
// CANNOT FETCH AND SHOW OBJECT OF ARRAYS OF OBJECTS
function Page()
{
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
    }, []);

    return(
        <div>
        <h1>Scraped URL page</h1>
        {result.scripts[0].script} 
        </div>
    ); 
}

export default Page;