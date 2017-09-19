var cnid = document.getElementById("CounterNumber");
cnid.setAttribute("title", window.location.hostname);
//Call Application
function app(){
	//Subsidiary of Application
	var add = (function () {
		var counter = 0;
		return function () {return counter += 1;}
	})();
	//Subsidiary of Application
	function myFunction(){
		cnid.innerHTML = add();
	}//Subsidiary of Application
	document.onkeyup = function(e){
		if((e || window.event).keyCode === 32){myFunction();}};
}
//Makes app visiable and animate In
function load(){
 cnid.classList.remove("hide");
 cnid.className += "animated fadeIn";
 app();
}
//Waits 3 sec then loads
setTimeout(load, 3000);