/*
If you aren't using an SSL certificate for your site that means you are losing a lot of potential traffic. 
We recommend getting an SSL certificate installed immediately.
*/

function CheckSsl(dom)
{
    const protocol = dom.window.location.protocol;

    if(protocol !== 'https:'){return 'negative - protocol is not https';}

    else{return 'positive';}
}

export default CheckSsl;