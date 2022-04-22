var exp_slider_left = document.getElementById("char_exp_slider");
var exp_slider_right = document.getElementById('char_exp_slider1');

var thumLeft = document.querySelector("#num1");
var thumRight = document.querySelector("#num2");


var range = document.querySelector(".info_promote_char_exp_slider_range");

var level_x = document.querySelector("#char_exp_level_x");
var level_y = document.querySelector("#char_exp_level_y");
var exp = document.querySelector("#char_exp_need_exp");
var book = document.querySelector("#char_exp_need_book");
var mora = document.querySelector("#char_exp_need_mora");


var level = [1, 20, 40, 50, 60, 70, 80 ,90]
var exp_need = [120175, 578325, 579100, 854125, 1195925, 1611875, 3423125]
var mora_need = [24000, 115600, 115800, 170800, 239000, 322200, 684600]

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

  var i;
  var exp_need_value=0;
  var mora_need_value=0;
    for(i=x; i<y; i++){
        exp_need_value += exp_need[i];
        mora_need_value += mora_need[i];

    }
    level_x.innerHTML = "&nbsp"+level[x]+"&nbsp";
    level_y.innerHTML = "&nbsp"+level[y]+"&nbsp";
    book.innerHTML = "&nbsp"+Math.ceil(exp_need_value/20000)+"&nbsp";
    mora.innerHTML = "&nbsp"+mora_need_value+"&nbsp";

}


exp_slider_left.addEventListener("input",thum_move);
exp_slider_right.addEventListener("input",thum_move);
