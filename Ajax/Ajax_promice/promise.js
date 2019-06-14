var minhaPromise = function(){

     return new Promise(function(resove,reject){

     	var xhr =  new  XMLHttpRequest();
     	xhr.open('GET','https://<economia class=""></economia>awesomeapi.com.br/json/all');
     	xhr.send(null);

     	xhr.onreadstatechange =  function(){

     		if(xhr.readystate === 4){
     			if(xhr.status === 200){

     			resove(JSON.parse(xhr.responseText))
     			}else{

     				reject('Erro na Requisição  !');
     			}
     		}



     	}

     });
}

 minhaPromise()
 .then(function(response){
     console.log(response);
 })
 .catch(function(error){
     console.warn(error);

 });
