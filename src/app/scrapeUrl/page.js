"use client"

import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
// CANNOT FETCH AND SHOW ARRAY OF ARRAYS OF OBJECTS
function Page()
{

    const [result, setResult] = useState([[{}]]);
    const searchParams = useSearchParams();
    const scrapeUrl = searchParams.get('url');
    useEffect(() => {
        fetch(`http://localhost:3000/scrapeUrl?url=${scrapeUrl}`)
        .then((result) => {
            setResult(result); 
    })
    }, []);

    return(
        <div>
        <h1>Scraped URL page</h1>
        {result[0][0]['no']} 
        </div>
    ); 
}

export default Page;