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

// copy links to anchors when clicked
$(function() {
	$('h1, h2, h3, h4, h5, h6').css('cursor', 'pointer');
	$('h1, h2, h3, h4, h5, h6').click(function(event) {
		let copy = document.createElement('input');
		copy.value = window.location.href.split(/[?#]/)[0] + "#" + event.target.id;
		document.body.appendChild(copy);
		copy.select();
		document.execCommand('copy');
		document.body.removeChild(copy);
		if ($(this).find('.copy-clipboard').length == 0) {
			$('<i class="material-icons copy-clipboard" style="font-size: 0.75em; margin-left: 10px;">content_copy</i>').appendTo(this).delay(2000).queue(function() { $(this).remove(); });
		}
	});
});

// resizing elements to force footer at bottom
$(function() {
	$('div.container:not(.footer)').last().css('min-height', ($(window).outerHeight() - $('body').outerHeight() + $('div.container:not(.footer)').last().outerHeight()));
});
$(window).resize(function() {
	$('div.container:not(.footer)').last().css('min-height', ($(window).outerHeight() - $('body').outerHeight() + $('div.container:not(.footer)').last().outerHeight()));
});