var exp_slider_left = document.getElementById("char_exp_slider");
var exp_slider_right = document.getElementById('char_exp_slider1');

var thumLeft = document.querySelector("#char_num1");
var thumRight = document.querySelector("#char_num2");


var range = document.querySelector('#range_char');

var lv_x = document.querySelector("#char_lv_x");
var lv_y = document.querySelector("#char_lv_y");

var book1 = document.querySelector("#char_exp_1");
var book2 = document.querySelector("#char_exp_2");
var book3 = document.querySelector("#char_exp_3");
var mora = document.querySelector("#char_mora_txt");


var level = [1, 20, 40, 50, 60, 70, 80 ,90]
var exp_need = [[1,0,6],[4,3,28],[0,0,29],[0,3,42],[1,3,59],[2,2,80],[4,0,171]]
var mora_need = [24200, 115800, 116000, 171000, 239200, 322400, 684800]

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
  var exp_need_value1=0;
  var exp_need_value2=0;
  var exp_need_value3=0;
  var mora_need_value=0;

    for(i=x; i<y; i++){
        exp_need_value1 += exp_need[i][0];
        exp_need_value2 += exp_need[i][1];
        exp_need_value3 += exp_need[i][2];
        mora_need_value += mora_need[i];
    }

    lv_x.innerHTML = level[x];
    lv_y.innerHTML = level[y];

    book1.innerHTML = "&nbsp"+exp_need_value1+"&nbsp";
    book2.innerHTML = "&nbsp"+exp_need_value2+"&nbsp";
    book3.innerHTML = "&nbsp"+exp_need_value3+"&nbsp";
    mora.innerHTML = "&nbsp"+mora_need_value.toLocaleString()+"&nbsp";

}


exp_slider_left.addEventListener("input",thum_move);
exp_slider_right.addEventListener("input",thum_move);
