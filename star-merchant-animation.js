function populate_starmap(){
	var map = document.body;
	for(let i=0;i<300;i++){
	var star = document.createElement("div");
	star.className="star";
	star.style.left=Math.round(Math.random()*0.95*window.innerWidth)+"px";
	star.speed = Math.round(Math.random()*2)+1;
	star.style.top=Math.round(Math.random()*document.body.clientHeight)+"px";
	star.style.padding=Math.round(Math.random()*3)+"px";
	star.style.opacity=Math.round(Math.random()*100)+"%";
	map.appendChild(star);
	}
	setInterval(animate_stars,10);	
	setInterval(star_scroll,50);
}
function star_scroll(){
	for(let i=0;i<300;i++){
		var star=document.getElementsByClassName("star")[i];
		star.style.left=(parseInt(star.style.left.slice(0,-2))-star.speed)+"px";
		if(parseInt(star.style.left.slice(0,-2))<=0){
			star.style.left=(0.95*window.innerWidth)+"px";
			star.speed = Math.round(Math.random()*2)+1;
			star.style.top=Math.round(Math.random()*0.95*document.body.clientHeight)+"px";
			star.style.padding=Math.round(Math.random()*3)+"px";
			star.style.opacity=Math.round(Math.random()*100)+"%";
		}
	}
}

function animate_stars(){
	var star = document.getElementsByClassName("star")[Math.round(Math.random()*99)];
	star.style.opacity=Math.round(Math.random()*100)+"%";
}

var track=0;
var question_titles=[["What is your ideal vacation?","What is your favorite food?","What's your ideal birthday gift?","What are your thoughts on the Einstein-Rosen Bridge Conjecture?","What's your favorite internet activity?","Do you like StarMerchant.com?"]];
var answer_sets=[[["Sunbathing in the Carribean","Hiking on Mt. Everest","Dancing in Madrid","Watching an Opera in Sicily","Bingeing Sharknado at Home","MAUI, BABY!!!"],["Hamburger","Fried Rice","Spaghetti","Pancakes","Does Coffee Count?","My tastes are too refined for this list"],["A New Bike","Trip to the Spa","A New TV","That Swiffer I've had my eye on","Some Clothes","octopus tree"],["Huh?","<p style='font-size:20px'> I don't got no degree in Quantum-Neuro Science</p>","Those <i>ARE</i> words","<p style='font-size:10px'>While I understand the idea, I believe, like Hawking, that there is some chronological consistency with the universe and that casuality and casual loops would result from any sort of translation through time, and thus the Bridge could only span space and not time due to such protections. The Chronological Protection Conjecture, after all, makes much more sense than any form of 'wormhole'</p>","Yes.","Yeah, well I know big words too!"],["Just surfing the web","<p style='font-size:20px'>Upating my 22 followers whenever I so much as breathe</p>","Watching Web Videos","Streaming my favorite TV show","Writing AGGRESSIVE fanfiction","<p style='font-size:25px'>Well, back in my day we didn't have no internets...</p>"],["Yes","Absolutely","Of Course!","You would have to be an idiot to hate it!","Praise Orian R. Thomas!","Who wouldn't?"]]];
var current_set=0;
var radio=true;
var selected=false;
function sel(button){
	if(!button.selected){
	if(radio){
		var buttons = document.getElementsByClassName("selected");
		for(let i=0;i<buttons.length;i++){
			buttons[i].selected=false;
			buttons[i].className="option";
		}
	}
	selected=true;
	button.className="selected option";
	button.selected=true;
	}else{
	button.className="option";
	button.selected=false;
	selected=false;
	}
}

function load_question_set(set){
	document.getElementById("qtitle").innerHTML=question_titles[track][set];
	var buttons=document.getElementsByClassName("option");
	for(let i=0;i<buttons.length;i++){
		buttons[i].innerHTML=answer_sets[track][set][i];
	}
}

function next(){
	if(selected){
	if(current_set>=(answer_sets.length-2)){
			document.getElementById("next").innerHTML="Get Results";
	}
	selected=false;
	var buttons = document.getElementsByClassName("selected");
	for(let i=0;i<buttons.length;i++){
		buttons[i].selected=false;
		buttons[i].className="option";
	}
	if(current_set>=(answer_sets.length-1)){
		if(getCookie("track")!=null){
			switch(getCookie("track")){
				case "0":
					document.location["href"]="starmerchant_about_blackholes.html";
					break;
				case "1":
					document.location["href"]="starmerchant_about_browndwarfs.html";
					break;
				case "2":
					document.location["href"]="starmerchant_about_neutronstars.html";
					break;
			}
		}else{
			switch(Math.round(Math.random()*3)){
				case 0:
					document.location["href"]="starmerchant_about_blackholes.html";
					break;
				case 1:
					document.location["href"]="starmerchant_about_browndwarfs.html";
					break;
				case 2:
					document.location["href"]="starmerchant_about_neutronstars.html";
					break;
			}
		}
	}else{
		current_set++;
		load_question_set(current_set);
	}
	}
}