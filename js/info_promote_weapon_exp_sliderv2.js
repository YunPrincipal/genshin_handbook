var weapon_exp_slider_left = document.getElementById("weapon_exp_slider");
var weapon_exp_slider_right = document.getElementById('weapon_exp_slider1');

var weapon_thumLeft = document.querySelector("#weapon_num1");
var weapon_thumRight = document.querySelector("#weapon_num2");


var weapon_range = document.querySelector("#range_weapon");

var weapon_lv_x = document.querySelector("#weapon_lv_x");
var weapon_lv_y = document.querySelector("#weapon_lv_y");


var weapon_ore1 = document.querySelector("#weapon_exp_1");
var weapon_ore2 = document.querySelector("#weapon_exp_2");
var weapon_ore3 = document.querySelector("#weapon_exp_3");
var weapon_mora = document.querySelector("#weapon_mora_txt");


var weapon_level = [1, 20, 40, 50, 60, 70, 80 ,90]
var weapon_exp_need = [
                      [[5,1,4],[27,2,0],[27,3,1],[40,4,1],[57,0,5],[76,5,1],[163,2,2]],
                      [[8,0,3],[41,2,3],[41,4,2],[61,4,1],[86,3,1],[116,3,3],[247,3,2]],
                      [[12,0,4],[62,1,2],[62,4,1],[92,4,0],[129,5,0],[175,0,1],[371,2,2]]
                      ]



function thum_move(e){
  var weapon_star1 = document.querySelector('input[name="radio1"]:checked');

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

  var i;
  var star = weapon_star1.value;
  var exp_need_value1=0;
  var exp_need_value2=0;
  var exp_need_value3=0;
  var mora_need_value=0;
    for(i=x; i<y; i++){
        exp_need_value1 += weapon_exp_need[star][i][2];
        exp_need_value2 += weapon_exp_need[star][i][1];
        exp_need_value3 += weapon_exp_need[star][i][0];
    }
    mora_need_value = exp_need_value1*40 + exp_need_value2*200 + exp_need_value3*1000;

      weapon_lv_x.innerHTML = level[x];
      weapon_lv_y.innerHTML = level[y];

    weapon_ore1.innerHTML = "&nbsp"+exp_need_value1+"&nbsp";
    weapon_ore2.innerHTML = "&nbsp"+exp_need_value2+"&nbsp";
    weapon_ore3.innerHTML = "&nbsp"+exp_need_value3+"&nbsp";
    weapon_mora.innerHTML = "&nbsp"+mora_need_value.toLocaleString()+"&nbsp";
}


weapon_exp_slider_left.addEventListener("input",thum_move);
weapon_exp_slider_right.addEventListener("input",thum_move);
