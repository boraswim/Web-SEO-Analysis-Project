import axios from 'axios';

async function ScrapeUrl(scrapeUrl)
{
    const response = await axios.request({
        method: "GET",
        url: scrapeUrl,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
            },
    });
    return response;
}

export default ScrapeUrl;