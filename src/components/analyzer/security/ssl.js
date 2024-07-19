/*
If you aren't using an SSL certificate for your site that means you are losing a lot of potential traffic. 
We recommend getting an SSL certificate installed immediately.
*/

function CheckSsl(dom)
{
    const checkSslObj = {};
    const checkSslArray = [];

    const protocol = dom.window.location.protocol;
    checkSslArray[0] = protocol;

    if(protocol !== 'https:')
        {
            checkSslObj['status'] = 'negative';
            checkSslObj['description'] = 'protocol is not https';
        }

    else
    {
        checkSslObj['status'] = 'positive';
        checkSslObj['description'] = 'protocol is https';
    }

    checkSslObj["instances"] = checkSslArray;
    return checkSslObj;
}

export default CheckSsl;