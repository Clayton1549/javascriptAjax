axios.get('https://economia.awesomeapi.com.br/json/all')
.then(function(response){
	console.log(response);

})
.catch(function(erroe){
	console.warn(error);
});