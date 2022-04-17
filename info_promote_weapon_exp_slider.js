var weapon_exp_slider_left = document.getElementById("weapon_exp_slider");
var weapon_exp_slider_right = document.getElementById('weapon_exp_slider1');

var weapon_thumLeft = document.querySelector("#weapon_num1");
var weapon_thumRight = document.querySelector("#weapon_num2");


var weapon_range = document.querySelector(".info_promote_weapon_exp_slider_range");

function thum_move(e){
  x = weapon_exp_slider_left.value;
  y = weapon_exp_slider_right.value;
  z = 0;
  if (x > y){
    z = x;
    x = y;
    y = z;
  }
  var leftpercent = x/7 * 100;
  var rightpercent = 100 - (y/7 * 100);

  leftpercent_str = (leftpercent).toString();
  rightpercent_str = (rightpercent).toString();

  weapon_thumLeft.style.left = leftpercent_str +'%';
  weapon_thumRight.style.right = rightpercent_str +'%';

  weapon_range.style.left = leftpercent_str +'%';
  weapon_range.style.right = rightpercent_str +'%';

}


weapon_exp_slider_left.addEventListener("input",thum_move);
weapon_exp_slider_right.addEventListener("input",thum_move);
