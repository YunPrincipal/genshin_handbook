var exp_slider_left = document.getElementById("char_exp_slider");
var exp_slider_right = document.getElementById('char_exp_slider1');

var thumLeft = document.querySelector("#num1");
var thumRight = document.querySelector("#num2");


var range = document.querySelector(".info_promote_char_exp_slider_range");

function thum_move(e){
  x = exp_slider_left.value;
  y = exp_slider_right.value;
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

  thumLeft.style.left = leftpercent_str +'%';
  thumRight.style.right = rightpercent_str +'%';

  range.style.left = leftpercent_str +'%';
  range.style.right = rightpercent_str +'%';

}


exp_slider_left.addEventListener("input",thum_move);
exp_slider_right.addEventListener("input",thum_move);
