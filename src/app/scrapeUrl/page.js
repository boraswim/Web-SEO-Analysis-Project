"use client"
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
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

    return(
        <div>
        <h1>Scraped URL page</h1>
        {result.scripts[0].script}
        <input type='button' value="Re-fetch" onClick={() => setFetched(fetched + 1)}/>
        </div>
    ); 
}

export default Page;