// function for including other scripts
function include(file) {
	var script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	document.getElementsByTagName('head').item(0).appendChild(script);
}
include('/src/js/accordion.js');
include('/src/js/countdown.js');

// appends site name to page titles
var site_title = "2022 Science Olympiad National Tournament";
if (document.title.length == 0) {
	document.title = site_title;
} else {
	document.title += " - " + site_title;
}

// adds files for page head, navigation, and footer
$(function() {
	$.get('/src/html/head.html', function(data) {
		$('head').append(data);
		$.get('/src/html/navigation.html', function(data) {
			$('.header').prepend(data);
			$.get('/src/html/footer.html', function(data) {
				$('body').append(data);
			});
		});
	});
});

// function is called by the hamburger menu when it is clicked
menu = false;
function hamburger(element) {
	element.classList.toggle("hamburger-toggle");
	if (!menu) {
		$('.navigation').toggleClass('active');
		menu = true;
	} else {
		$('.navigation').toggleClass('active');
		menu = false;
	}
}

// external links open in new tab
$(function() {
	$.expr[':'].external = function(obj){
		return !obj.href.match(/^mailto\:/)
			&& (obj.hostname != location.hostname)
			&& !obj.href.match(/^javascript\:/)
			&& !obj.href.match(/^$/)
	};
	$('a:external').attr('target', '_blank');
});

// resizing elements to force footer at bottom
$(function() {
	$('div.container:not(.footer)').last().css('min-height', ($(window).outerHeight() - $('body').outerHeight() + $('div.container:not(.footer)').last().outerHeight()));
});
$(window).resize(function() {
	$('div.container:not(.footer)').last().css('min-height', ($(window).outerHeight() - $('body').outerHeight() + $('div.container:not(.footer)').last().outerHeight()));
});