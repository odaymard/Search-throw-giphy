
 function CallApi() {
    
	var xhttp = new XMLHttpRequest;
    var gettext=document.getElementById('txtsearch');
      var ul=document.querySelector('.flex-container');
	   ul.innerHTML = '';


    xhttp.open("GET", "https://api.giphy.com/v1/gifs/search?q="  + gettext.value + "&api_key=RMyhQ6NDuKnsfix5ARS4pcA7N4kOxTQi&limit=12", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
   var response = JSON.parse(xhttp.responseText);
   response.data.forEach(function(element){
   var imgsrch=document.createElement('img');
   //response.data[0].images.downsized.url
  imgsrch.setAttribute('src',element.images.downsized.url);
  imgsrch.setAttribute('height',350);
  imgsrch.setAttribute('width',350);
  var li=document.createElement('li' );
  li.className='flex-item';

  li.appendChild(imgsrch);
  
  ul.appendChild(li);
  
  });
   console.log(response);
	    return response;

}
