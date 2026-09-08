const myInfo= new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector("#results").innerHTML=`
<p> <span> Application From: </span>${myInfo.get('first')} ${myInfo.get('last')}</p> 
<p> <span> Applying As: </span>${myInfo.get('who')}</p> 
<p> <span> Your Phone: </span>${myInfo.get('telephone')}</p> 
<p> <span> Your Email: </span>${myInfo.get('Email')}</p>
<p> <span> Your Portfolio: </span>${myInfo.get('portfolio')}</p>
<p> <span> Your Comments: </span>${myInfo.get('comments')}</p>`  