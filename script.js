var animateButton = function(e) {
	e.preventDefault;

	e.target.classList.remove('animate');

	e.target.classList.add('animate');
	setTimeout(function() {
		e.target.classList.remove('animate');
	}, 700);
};

var colorfullButtons = document.getElementsByClassName('animated-button');

for (var i = 0; i < colorfullButtons.length; i++) {
	colorfullButtons[i].addEventListener('click', animateButton, false);
}

const swapi = require('swapi-node');

swapi.getPerson(1).then((result) => {
	console.log(result);
});
