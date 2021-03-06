/* call api fun 
    call giphy api and get 12 photos per call 
	parameter issub determice if it called throw submit or not
	*/
 function callApi(issub) {
   const xhttp = new XMLHttpRequest;
   const gettext = document.getElementById('txtsearch');
   const ul = document.querySelector('.flex-container');
   if (issub) {
    ul.innerHTML = '';
   } 
   
   xhttp.open('GET', 'https://api.giphy.com/v1/gifs/search?q='  +
     gettext.value +
	 '&api_key=apikey&limit=' + 
	 12 +
	 '&offset=' +
	 ul.childNodes.length , false);
   xhttp.setRequestHeader('Content-type', 'application/json');
   xhttp.send();
   const response = JSON.parse(xhttp.responseText);
   response
     .data
       .forEach (function(element) {
          const imgsrch=document.createElement('img');
          imgsrch.setAttribute('src',element.images.downsized.url);
		  imgsrch.setAttribute('alt',element.images.downsized.url);
          imgsrch.setAttribute('height',350);
          imgsrch.setAttribute('width',350);
		  
          const li = document.createElement('li' );
          li.className = 'flex-item';
          li.appendChild(imgsrch); 
          ul.appendChild(li);
        }
		
    );
 return false; // to prevent page reloading 
}


window.addEventListener('scroll', function () {
  const ul = document.querySelector('.flex-container');
  const top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;		
  if ((top + window.innerHeight >= document.querySelector('.flex-container').scrollHeight) && (ul.childNodes.length>1)) {
    callApi(false); // callapi with parameter false it means it was not submited 
  }
  
}, false);
