const container = document.querySelector('.container');
const btn 		= document.querySelector('#dropButton');
const sitelinks = document.querySelectorAll('.sitelinks a');
const dropdown  = document.querySelector('.dropdown');
const socials   = document.querySelectorAll('.socials i');
const thumbnail = document.querySelector('.thumbnail img');
const imageDescription = document.querySelector('.caption h3');


const images = [
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
		]

imageDescription.innerText = descriptions[0];

let index = 0;
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

// sitelinks.forEach((elem) => {
// 	elem.addEventListener('click', function(){
// 		elem.classList.add("active");
// 	})
// })

function changeSlide(i){
	index = (index + i);

	if(index > 4)
		index = 0;

	if(index < 0)
		index = 4;

	thumbnail.src = images[index];
	imageDescription.innerText = descriptions[index]

}
// setInterval(changeSlide, 2000);





