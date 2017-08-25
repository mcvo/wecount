document.getElementById("CounterNumber").setAttribute("title", window.location.hostname);

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("CounterNumber").innerHTML = add();
}

document.onkeyup = function(e){
    if((e || window.event).keyCode === 32){
        myFunction();
    }
};