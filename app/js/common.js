$(function() {

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			 items:1,
			 loop: true
		});
	});

	var toggler = document.getElementById('toggler');
			toggler.onclick = function(e){
			e.preventDefault();
			toggler.classList.toggle('toggler--close');
		document.getElementById('header-nav').classList.toggle('nav--visible');
	};

	$(function() {
		$('select').styler();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".recipe__item__text").equalHeights();

	$(document).ready(function() { 
	    var windowWidth = $(window).width();
	    if(windowWidth > 1023){
			$('.accordion-content').removeClass('accordion-content');
			$('.accordionItem').removeClass('accordionItem');
			$('.is-collapsed').removeClass('is-collapsed');
	    }
	});


	//accordion
	//uses classList, setAttribute, and querySelectorAll
		//if you want this to work in IE8/9 youll need to polyfill these
		(function(){
		var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
		touchSupported = ('ontouchstart' in window),
		pointerSupported = ('pointerdown' in window);

		skipClickDelay = function(e){
		e.preventDefault();
		e.target.click();
		}

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
		};
		setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
		case "true":
		setAriaAttr(el1, 'aria-expanded', 'true');
		setAriaAttr(el2, 'aria-hidden', 'false');
		break;
		case "false":
		setAriaAttr(el1, 'aria-expanded', 'false');
		setAriaAttr(el2, 'aria-hidden', 'true');
		break;
		default:
		break;
		}
		};
		//function
		switchAccordion = function(e) {
		console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
		thisQuestion.classList.toggle('is-collapsed');
		thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');

		thisAnswer.classList.toggle('animateIn');
		};
		for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
		accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
		}
		if(pointerSupported){
		accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
		}
		accordionToggles[i].addEventListener('click', switchAccordion, false);
		}
		})();

});

