// parallex effect

const introBg = document.getElementById("intro-parallex");
const servicesBg = document.getElementById("services-parallex");
const aboutBg = document.getElementById("about-parallex");
const contactBg = document.getElementById("contact-parallex");

const aboutSection = document.getElementById("about");
console.log(aboutSection.offsetTop);

window.addEventListener("scroll", function () {
	let offset = window.scrollY;
	introBg.style.backgroundPositionY = "-" + offset * 0.2 + "px";
	servicesBg.style.backgroundPositionY = "-" + offset * 0.1 + "px";


	let offsetAbout = window.scrollY - aboutSection.offsetTop+500;
	aboutBg.style.backgroundPositionY = "-" + offsetAbout * 0.2 + "px";
	contactBg.style.backgroundPositionY = "-" + offsetAbout * 0.1 + "px";
});

// gallery changing

const imgBtn1 = document.querySelector(".btn-container .first");
const imgBtn2 = document.querySelector(".btn-container .second");
const imgBtn3 = document.querySelector(".btn-container .third");
const galleryOne = document.querySelector(".gallery-1");
const gallerySecond = document.querySelector(".gallery-2");
const galleryThird = document.querySelector(".gallery-3");
const galleryItems = document.querySelectorAll(
	"section#gallery .gallery-images .img-item"
);

imgBtn1.addEventListener("click", function () {
    this.classList.add("active-btn");
    imgBtn2.classList.remove('active-btn');
    imgBtn3.classList.remove('active-btn');
	galleryOne.style.display = "flex";
	gallerySecond.style.display = "none";
	galleryThird.style.display = "none";
	galleryItems.forEach((item) => {
		item.classList.add("animate-item");
		console.log(item);
	});
});
imgBtn2.addEventListener("click", function () {
    this.classList.add("active-btn");
    imgBtn1.classList.remove('active-btn');
    imgBtn3.classList.remove('active-btn');
	galleryOne.style.display = "none";
	galleryThird.style.display = "none";
	gallerySecond.style.display = "flex";
	galleryItems.forEach((item) => {
		item.classList.add("animate-item");
		console.log(item);
	});
});
imgBtn3.addEventListener("click", function () {
	this.classList.add("active-btn");
    imgBtn1.classList.remove('active-btn');
    imgBtn2.classList.remove('active-btn');
	galleryOne.style.display = "none";
	gallerySecond.style.display = "none";
	galleryThird.style.display = "flex";
	galleryItems.forEach((item) => {
		item.classList.add("animate-item");
		console.log(item);
	});
});

// navlink color change

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#main .intro-left header nav ul li a");
const mobileLi = document.querySelectorAll('#mobile-menu .wrapper ul a');

window.addEventListener("scroll", function () {
	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (scrollY >= sectionTop - sectionHeight / 10) {
			current = section.getAttribute("id");
		}
		console.log("CURRENT",current);
		navLi.forEach((li) => {
			li.classList.remove("active-nav");
			if (li.classList.contains(current)) {
				li.classList.add("active-nav");
			}
		});
		mobileLi.forEach((li) => {
			li.classList.remove("active-nav");
			if (li.classList.contains(current)) {
				li.classList.add("active-nav");
			}
		});
	});

	
});

// mobile menu

const menuBtn = document.querySelector('.menu-open-icon');
const menuIcon = document.querySelector('.menu-open-icon span');
const menuSlider = document.querySelector('#mobile-menu .wrapper ul');

menuBtn.addEventListener('click',function(){
	menuIcon.classList.toggle('fa-times');
	menuSlider.style.top = '0';
	if(!menuIcon.classList.contains('fa-times')){
		menuSlider.style.top = '-500px';
		
	}
	
	console.log("working");
})