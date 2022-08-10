var today = new Date();
var end_day = new Date ("2022-08-23 16:00:00");
var next_end_day = new Date("2022-09-13 19:00:00");

var day_HTML = document.getElementById('day_interval');
var day_HTML2 = document.getElementById('day_interval1');


if (end_day >= today){
  var wish_img1 = document.getElementById('wish_img_1');
  var wish_img2 = document.getElementById('wish_img_2');

  wish_img1.src = "img/index/v2.81_char.jpg";
  wish_img2.src = "img/index/v2.81_weapon.jpg";

}
  else{
  var wish_img1 = document.getElementById('wish_img_1');
  var wish_img2 = document.getElementById('wish_img_2');

  end_day = next_end_day;

  wish_img1.src = "img/index/v3.00_char.jpg";
  wish_img2.src = "img/index/v3.00_weapon.jpg";

}

var day_interval = end_day - today;

var day1_interval = Math.floor((day_interval % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
var hour_interval = Math.floor((day_interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var min_interval = Math.floor((day_interval % (1000 * 60 * 60)) / (1000 * 60));
var sec_interval = Math.floor((day_interval % (1000 * 60)) / 1000);



day_HTML.innerHTML = "&nbsp&nbsp"+day1_interval+"일&nbsp"+hour_interval+"시간&nbsp&nbsp"
day_HTML2.innerHTML = "&nbsp&nbsp"+day1_interval+"일&nbsp"+hour_interval+"시간&nbsp&nbsp"

var monday = document.getElementById('mon');
var tuesday = document.getElementById('tue');
var wednesday = document.getElementById('wed');

today.setHours(today.getHours()-5);
var farming_today = today
var day_of_the_week = farming_today.getDay()%7 ;

if(day_of_the_week == 1 || day_of_the_week == 4){
  monday.style.backgroundColor = '#537a90';
}
else if(day_of_the_week == 2 || day_of_the_week == 5){
  tuesday.style.backgroundColor = '#537a90';
}
else if(day_of_the_week == 3 || day_of_the_week == 6){
  wednesday.style.backgroundColor = '#537a90';
}
else{
  monday.style.backgroundColor = '#537a90';
  tuesday.style.backgroundColor = '#537a90';
  wednesday.style.backgroundColor = '#537a90';
}
