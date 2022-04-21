var today = new Date();
var end_day = new Date ("2022-05-10 16:00:00")

var day_HTML = document.getElementById('day_interval');
var hour_HTML = document.getElementById('hour_interval');
var min_HTML = document.getElementById('min_interval');


var day_interval = end_day - today;

var day1_interval = Math.floor((day_interval % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
var hour_interval = Math.floor((day_interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var min_interval = Math.floor((day_interval % (1000 * 60 * 60)) / (1000 * 60));
var sec_interval = Math.floor((day_interval % (1000 * 60)) / 1000);

console.log(hour_interval);


day_HTML.innerHTML = day1_interval+"일&nbsp"+hour_interval+"시간&nbsp"+min_interval+"분&nbsp"+"남았음";
