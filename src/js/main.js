var burger = document.querySelector(".logo__button");
var nav = document.querySelector(".main-nav");
var modal = document.querySelector(".modal");
var modal__button = document.querySelector(".info__button");
var close = document.querySelector(".modal__close");




document.querySelector(".buttonleftslider").onclick = buttonRight;
document.querySelector(".buttonrightslider").onclick = buttonLeft;
var polosa = document.querySelector(".features__list");
var left = 0;




function buttonLeft () {
	left = left - 300;
	if (left < -600) {
		left = 0;
	}
	polosa.style.left = left+ 'px';
	autoSlider ();
};

function buttonRight () {
	left = left + 300; 
	if (left > 0) {
		left = -600;
	}
	polosa.style.left = left+ 'px';
};







burger.addEventListener("click", function (){
	if (nav.classList.contains('button--closed'))
	{
		nav.classList.remove('button--closed');
		nav.classList.add('button--opened'); 
	} else {
		nav.classList.add('button--closed');
		nav.classList.remove('button--opened');
	}
	
});


burger.addEventListener("click", function () {
	if (burger.classList.contains('logo__button--bureger--active')) 
	{
		burger.classList.remove('logo__button--bureger--active');
	}	else {
		burger.classList.add('logo__button--bureger--active');
	}
});

modal__button.addEventListener("click", function (evt) {
	evt.preventDefault ();
	modal.classList.remove("modal__exit");
});


close.addEventListener("click", function (evt) {
	evt.preventDefault ();
	modal.classList.add("modal__exit");
})



