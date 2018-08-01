const request = superagent
var API_URL= "https://randomuser.me/api/?results=50"
var div= document.createElement("div"); 				//aqui estas  creando algo en el document pero necesitas un appendChild
var body = document.querySelector("body"); 
var divPrevio = document.querySelector(".users-list")
var btn = document.querySelector(".shuffle")
//var apContainer= document.querySelector("#app-container")
//console.log(apContainer);
//apContainer.appendChild(btn)

btn.addEventListener("click", function(e){
divPrevio.innerHTML=""

request
	.get(API_URL)   
	.then(function(response){
		//console.log(response.body.results);
		var todaLaInfo = response.body.results;

		todaLaInfo.forEach(function(personas){
			
		var article = document.createElement("article")
		var span = document.createElement("span")
		var h6 = document.createElement("h6")

		span.textContent = personas.nat;
		h6.textContent = personas.email;


		article.appendChild(span)
		article.appendChild(h6)
	    divPrevio.appendChild(article)
		//document.querySelector(".users-list").appendChild(article)
		})
		
		//body.appendChild(div);
})
 })
