const container = document.querySelector('.container');
const btn 		= document.querySelector('#dropButton');
const sitelinks = document.querySelectorAll('.sitelinks a');
const dropdown  = document.querySelector('.dropdown');
const socials   = document.querySelectorAll('.socials i');


const thumbnail = document.querySelectorAll('.thumbnail img');
const imageDescription = document.querySelectorAll('.caption h3');
const toggleLeft = document.querySelectorAll(".prev");
const toggleRight = document.querySelectorAll(".next");

const length = thumbnail.length;

const  images = [
			"https://images.unsplash.com/photo-1654444421865-dc4114462e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1657037029340-bbb5e92c8d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1657041308315-fd20620613b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1657037027027-6cca94dcc4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"https://images.unsplash.com/photo-1657073895095-b050616ab369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
];

const descriptions = [
				"A beautiful day in xianxiou china, rain fed grasslands, ancient culture, scenic mountains",
				"Bird eye view of glorious omaha at night time, a vision to reminisce forever",
				"What did you say whole night just passed in this one pic catch your stars before they disappear",
				"Capturing light ",
				"The time i went to office on my son's bycycle"
		];

for(var i=0;i<length;i++){
	imageDescription[i].innerText = descriptions[0];
}


const index = Array(length).fill(0);
var hidden = true;


btn.addEventListener('click', function(){
	if(hidden){
		dropdown.classList.add('show');
		hidden = false;
	}
	else{
		dropdown.classList.remove('show');
		hidden = true;
	}
});

function changeSlide(step, i){
	console.log("index of thumb :", i);
	index[i] = (index[i] + step);

	if(index[i] > 4)
		index[i] = 0;

	if(index[i] < 0)
		index[i] = 4;
	const elem = thumbnail[i];
	
	//Make invisible
	elem.style.opacity="0";
	
	// Change Image
	setTimeout(()=>{
		elem.src=images[index[i]];
	},200)

	// Make Visible
	setTimeout(()=>{
		elem.style.opacity = "1";
	},300)
	
	imageDescription[i].innerText = descriptions[index[i]];

}

for(var i=0;i<length;i++){
	toggleLeft[i].addEventListener("click", (e) => changeSlide(-1,e.srcElement.id.charAt(2)));
	toggleRight[i].addEventListener("click", (e) => changeSlide(1, e.srcElement.id.charAt(2)));
}







