window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		var i;
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			cas--;
			casovnik.innerHTML = cas;
			if(cas == 0){
				window.alert( "Opomnik!\n\nZadolžitev "+ opomnik.querySelector(".naziv_opomnika").innerHTML +" je potekla!");
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var izvediPrijavo = function(event){
		var ime = document.querySelector("#uporabnisko_ime").value;
		var pozdrav = document.querySelector("#uporabnik");
		pozdrav.innerHTML=ime;
		var pokrivalo = document.querySelector(".pokrivalo");
		pokrivalo.style.display = 'none';
		
	}
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	
	var dodajOpomnik = function(event){
		var naziv = document.querySelector("#naziv_opomnika");
		var cas = document.querySelector("#cas_opomnika");
		var nazivvalue = naziv.value;
		var casvalue = cas.value;
		
		naziv.value = "";
		cas.value = "";
		
		document.querySelector("#opomniki").innerHTML += "	<div class='opomnik senca rob'><div class='naziv_opomnika'>" + nazivvalue +
		"</div><div class='cas_opomnika'> Opomnik čez <span>" + casvalue + "</span> sekund.</div></div>";
		
	}
	document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);
	
});

