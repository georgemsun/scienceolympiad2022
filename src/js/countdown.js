$(function() {
	var countdown = setInterval(function() {
		var countdowns = document.getElementsByClassName('countdown');
		
		for (var i = 0; i < countdowns.length; i++) {
			var name = countdowns[i].getAttribute('name');
			var target = countdowns[i].getAttribute('value');
			target = new Date(target).getTime();
			var now = new Date().getTime();
			var distance = target - now;

			var days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
			var hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			var minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
			var seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

			countdowns[i].innerHTML = '<div><h2>' + name + '</h2><div>' + days + '<span>days</span></div><div class="separator">:</div><div>' + hours + '<span>hours</span></div><div class="separator">:</div><div>' + minutes + '<span>minutes</span></div><div class="separator">:</div><div>' + seconds + '<span>seconds</span></div></div>';
		}
	}, 1000);
});