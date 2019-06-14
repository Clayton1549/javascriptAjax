var xhr = new XMLHttpRequest();

xhr.open('GET','https://economia.awesomeapi.com.br/json/all');
xhr.send(null);

xhr.onreadystatechange  =  function(){
	if(xhr.readystate === 4  ) {

	console.log(JSON.parse(xhr.responseText));
	}



}
