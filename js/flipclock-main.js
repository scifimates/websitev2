
//* Target Date Must be Like Below
//var date = new Date("June 15, 2016 12:45:00");

// Just for running purpose
//=======================================
var start = new Date();
start.setDate(start.getDate());
start.setHours(0,0,0,0)
//======================================
var now   = new Date();

var diff = (now.getTime() - start.getTime()) / 1000;

	var clock = $('#clock1').FlipClock(diff, {
		clockFace: 'HourlyCounter',
		countdown: false,
		showSeconds: true
	});