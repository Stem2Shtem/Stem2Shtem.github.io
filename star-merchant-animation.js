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