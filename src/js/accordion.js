$(function() {
	var questions = document.querySelectorAll('.accordion > h3');
	function accordion_toggle(e) {
		e.classList.toggle('active');
		var panel = e.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	}
	for (var i = 0; i < questions.length; i++) {
		questions[i].setAttribute('tabindex', '0');
		questions[i].addEventListener('click', function() {
			accordion_toggle(this);
		});
		questions[i].addEventListener('keypress', function(event) {
			if (event.keyCode == 13) {
				accordion_toggle(this);
			}
		});
	}
});