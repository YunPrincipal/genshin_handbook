var ascension_slider_left = document.getElementById("ascension_exp_slider");
var ascension_slider_right = document.getElementById('ascension_exp_slider1');

var ascension_thumLeft = document.querySelector("#ascension_num1");
var ascension_thumRight = document.querySelector("#ascension_num2");


var ascension_range = document.querySelector('#range_ascension');

var ascension_lv_x = document.querySelector("#ascension_lv_x");
var ascension_lv_y = document.querySelector("#ascension_lv_y");

var ascension_material1 = document.querySelector("#ascension_material_1");
var ascension_material2 = document.querySelector("#ascension_material_2");
var ascension_material3 = document.querySelector("#ascension_material_3");
var ascension_material4 = document.querySelector("#ascension_material_4");
var ascension_material5 = document.querySelector("#ascension_material_5");
var ascension_material6 = document.querySelector("#ascension_material_6");
var ascension_material7 = document.querySelector("#ascension_material_7");
var ascension_material8 = document.querySelector("#ascension_material_8");
var ascension_material9 = document.querySelector("#ascension_material_9");
var ascension_mora = document.querySelector("#ascension_mora_ascension_txt");


var level = [1, 20, 40, 50, 60, 70, 80 ,90]
var material_need = [[1,0,0,0,3,0,0,0,3],
                      [0,3,0,0,15,0,0,2,10],
                      [0,6,0,0,0,12,0,4,20],
                      [0,0,3,0,0,18,0,8,30],
                      [0,0,6,0,0,0,12,12,45],
                      [0,0,0,6,0,0,24,20,60],
                      [0,0,0,0,0,0,0,0,0]]
var ascension_mora_need = [20000, 40000, 60000, 80000, 100000, 120000,0]
function thum_move(e){
  x = ascension_slider_left.value;
  y = ascension_slider_right.value;
  z = 0;
  if (x > y){
    z = x;
    x = y;
    y = z;
  }
  var ascension_leftpercent = x/7 * 100;
  var ascension_rightpercent = 100 - (y/7 * 100);

  ascension_leftpercent_str = (ascension_leftpercent).toString();
  ascension_rightpercent_str = (ascension_rightpercent).toString();

  ascension_thumLeft.style.left = ascension_leftpercent_str +'%';
  ascension_thumRight.style.right = ascension_rightpercent_str +'%';

  ascension_range.style.left = ascension_leftpercent_str +'%';
  ascension_range.style.right = ascension_rightpercent_str +'%';

  var i;
  var material_need_value = [0,0,0,0,0,0,0,0,0];
  var mora_need_value=0;

    for(i=x; i<y; i++){
        for( t=0; t<=8; t++){
          material_need_value[t] += material_need[i][t];
        }
        mora_need_value += ascension_mora_need[i];
    }

    ascension_lv_x.innerHTML = level[x];
    ascension_lv_y.innerHTML = level[y];

    ascension_material1.innerHTML = "&nbsp"+material_need_value[0]+"&nbsp";
    ascension_material2.innerHTML = "&nbsp"+material_need_value[1]+"&nbsp";
    ascension_material3.innerHTML = "&nbsp"+material_need_value[2]+"&nbsp";
    ascension_material4.innerHTML = "&nbsp"+material_need_value[3]+"&nbsp";
    ascension_material5.innerHTML = "&nbsp"+material_need_value[4]+"&nbsp";
    ascension_material6.innerHTML = "&nbsp"+material_need_value[5]+"&nbsp";
    ascension_material7.innerHTML = "&nbsp"+material_need_value[6]+"&nbsp";
    ascension_material8.innerHTML = "&nbsp"+material_need_value[7]+"&nbsp";
    ascension_material9.innerHTML = "&nbsp"+material_need_value[8]+"&nbsp";
    ascension_mora.innerHTML = "&nbsp"+mora_need_value.toLocaleString()+"&nbsp";

}


ascension_slider_left.addEventListener("input",thum_move);
ascension_slider_right.addEventListener("input",thum_move);
