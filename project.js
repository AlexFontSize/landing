'use strict'

const parent = document.querySelectorAll('.parent');
const element = document.querySelectorAll('.element');

window.addEventListener('scroll', showVisible);

function showVisible(){
	for(let i = 0; i < parent.length; i++){
		if(isVisible(parent[i])){
			element[i].className = 'element visible';
		};
	};
};
function isVisible(element){
	let coords = element.getBoundingClientRect();
	let windowHeight = document.documentElement.clientHeight;
	let topVisible = coords.top > 0 && coords.top < windowHeight;
	let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
	return topVisible && bottomVisible;
};