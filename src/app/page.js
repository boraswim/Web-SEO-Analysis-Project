"use client"

import style from '../../public/main.css';
import bootstrap from '../../public/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

function Page()
{
  function SubmitUrl()
  {
    const urlInput = document.getElementById("urlInput").value;
    window.location.href = `http://localhost:3001/scrapeUrl?url=${urlInput}`;
  }

  return(
    <div className="position-absolute top-50 start-50 translate-middle">
    <h1 className="title">Web/SEO Analysis</h1>
    <div className="input-group mb-3">
    <input type="text" className="form-control border-dark border-3 border-opacity-50" placeholder="Enter URL to analyze..." aria-label="Enter URL to analyze..." aria-describedby="button-addon2" id="urlInput"/>
    <button className="btn btn-outline-secondary border-3 border-opacity-50" type="button" id="button-addon2" onClick={SubmitUrl}>Submit</button>
    </div>
    </div>
  );
};


export default Page;