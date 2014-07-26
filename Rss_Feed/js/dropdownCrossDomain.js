function openFeed(){
		var url=document.getElementById("rssFeedOptions");
		url = url[url.selectedIndex].value;
		
		var xmlHttpRequest =  new XMLHttpRequest();

		xmlHttpRequest.open('GET', url, true);

		xmlHttpRequest.onreadystatechange = function (){
		
		var response = xmlHttpRequest.responseText;

		var jsonObjList = JSON.parse(xmlHttpRequest.responseText);
		
		createOutHtml(jsonObjList);
		//	document.getElementById("feed").innerHTML=jsonObjList.deals[0].hotelName;
	};

	xmlHttpRequest.send();								          
}


function createOutHtml(jsonObjList)
{
	for (int i = 0 ; i < jsonObjList.deals.size(); i++)
	{
		var newDiv = document.createElement("div"); 
  		var newContent = document.createTextNode(deal[i].hotelName); 
  		newDiv.appendChild(newContent); //add the text node to the newly created div. 

 		// add the newly created element and its content into the DOM 
  		var currentDiv = document.getElementById("feed"); 
  		document.body.insertBefore(newDiv, currentDiv); 
	}
	);
}