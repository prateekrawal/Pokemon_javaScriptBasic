var pikachu;
pikachu=document.getElementById('pikachu');
var bulb;
bulb=document.getElementById('bulbasour');
var meowth;
meowth=document.getElementById('meowth');
var char;
char=document.getElementById('charmender');
var squirtle
squirtle=document.getElementById('squirtle');
/*
window.addEventListener('click',playS,false);
function playS(e)
{
	var tar=event.target;
	var x=tar.id;
	console.log(x)
	var a=document.getElementById(x);
	document.getElementById(x).className="zoom";
	audio.currentTime=0;
	audio.play();
	setTimeout(function(){ document.getElementById(x).className="normal"; }, 1250);
}*/
window.addEventListener('keydown', playSound);
function playSound(e)
{
    var x=event.keyCode;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    	if(!audio)
		return;
	console.log(x);
	var a=document.getElementById(x);
	document.getElementById(x).className="zoom";
	audio.currentTime=0;
	audio.play();
	document.getElementById(data).textContent={}
	setTimeout(function(){ document.getElementById(x).className="normal"; }, 1250);


}