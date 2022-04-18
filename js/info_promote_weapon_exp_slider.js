var weapon_exp_slider_left = document.getElementById("weapon_exp_slider");
var weapon_exp_slider_right = document.getElementById('weapon_exp_slider1');

var weapon_thumLeft = document.querySelector("#weapon_num1");
var weapon_thumRight = document.querySelector("#weapon_num2");


var weapon_range = document.querySelector(".info_promote_weapon_exp_slider_range");

var weapon_level_x = document.querySelector("#weapon_exp_level_x");
var weapon_level_y = document.querySelector("#weapon_exp_level_y");
var weapon_exp = document.querySelector("#weapon_exp_need_exp");
var weapon_ore = document.querySelector("#weapon_exp_need_ore");


var weapon_level = [1, 20, 40, 50, 60, 70, 80 ,90]
var weapon_exp_need = [[53475, 274000, 276350, 408150, 571625, 770125, 1634475],
                [81000, 415125, 418725, 618400, 866050, 1166875, 2476475],
                [121550, 622800, 628150, 927675, 1299125, 1750375, 3714775]]



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
  var exp_need_value=0;
  var mora_need_value=0;
    for(i=x; i<y; i++){
        exp_need_value += weapon_exp_need[star][i];
    }
    weapon_level_x.innerHTML = "&nbsp"+weapon_level[x]+"&nbsp";
    weapon_level_y.innerHTML = "&nbsp"+weapon_level[y]+"&nbsp";
    weapon_exp.innerHTML = "&nbsp"+exp_need_value+"&nbsp";
    weapon_ore.innerHTML = "&nbsp"+Math.ceil(exp_need_value/10000)+"&nbsp";

}


weapon_exp_slider_left.addEventListener("input",thum_move);
weapon_exp_slider_right.addEventListener("input",thum_move);
