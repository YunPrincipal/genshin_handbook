var skill_slider_left = document.getElementById("skill_exp_slider");
var skill_slider_right = document.getElementById('skill_exp_slider1');

var skill_thumLeft = document.querySelector("#skill_num1");
var skill_thumRight = document.querySelector("#skill_num2");


var skill_range = document.querySelector('#range_skill');

var skill_lv_x = document.querySelector("#skill_lv_x");
var skill_lv_y = document.querySelector("#skill_lv_y");

var skill_material1 = document.querySelector("#skill_material_1");
var skill_material2 = document.querySelector("#skill_material_2");
var skill_material3 = document.querySelector("#skill_material_3");
var skill_material4 = document.querySelector("#skill_material_4");
var skill_material5 = document.querySelector("#skill_material_5");
var skill_material6 = document.querySelector("#skill_material_6");
var skill_material7 = document.querySelector("#skill_material_7");
var skill_material8 = document.querySelector("#skill_material_8");
var skill_mora = document.querySelector("#skill_mora_skill_txt");


var skill_level = [1, 2, 3, 4, 5, 6, 7 , 8, 9 ,10]
var skill_book_need = [[3,0,0,0,6,0,0,0],
                      [0,2,0,0,0,3,0,0],
                      [0,4,0,0,0,4,0,0],
                      [0,6,0,0,0,6,0,0],
                      [0,9,0,0,0,9,0,0],
                      [0,0,4,1,0,0,4,0],
                      [0,0,6,1,0,0,6,0],
                      [0,0,12,2,0,0,9,0],
                      [0,0,16,2,0,0,12,1]]
var skill_mora_need = [12500, 17500, 25000, 30000, 37500, 120000,260000,450000,700000]
function thum_move(e){
  x = skill_slider_left.value;
  y = skill_slider_right.value;
  z = 0;
  if (x > y){
    z = x;
    x = y;
    y = z;
  }
  var skill_leftpercent = x/9 * 100;
  var skill_rightpercent = 100 - (y/9 * 100);

  skill_leftpercent_str = (skill_leftpercent).toString();
  skill_rightpercent_str = (skill_rightpercent).toString();

  skill_thumLeft.style.left = skill_leftpercent_str +'%';
  skill_thumRight.style.right = skill_rightpercent_str +'%';

  skill_range.style.left = skill_leftpercent_str +'%';
  skill_range.style.right = skill_rightpercent_str +'%';

  var i;
  var skill_book_need_value = [0,0,0,0,0,0,0,0];
  var skill_mora_need_value=0;

    for(i=x; i<y; i++){
        for( t=0; t<=7; t++){
          skill_book_need_value[t] += skill_book_need[i][t];
        }
        skill_mora_need_value += skill_mora_need[i];
    }

    skill_lv_x.innerHTML = skill_level[x];
    skill_lv_y.innerHTML = skill_level[y];

    skill_material1.innerHTML = "&nbsp"+skill_book_need_value[0]+"&nbsp";
    skill_material2.innerHTML = "&nbsp"+skill_book_need_value[1]+"&nbsp";
    skill_material3.innerHTML = "&nbsp"+skill_book_need_value[2]+"&nbsp";
    skill_material4.innerHTML = "&nbsp"+skill_book_need_value[3]+"&nbsp";
    skill_material5.innerHTML = "&nbsp"+skill_book_need_value[4]+"&nbsp";
    skill_material6.innerHTML = "&nbsp"+skill_book_need_value[5]+"&nbsp";
    skill_material7.innerHTML = "&nbsp"+skill_book_need_value[6]+"&nbsp";
    skill_material8.innerHTML = "&nbsp"+skill_book_need_value[7]+"&nbsp";
    skill_mora.innerHTML = "&nbsp"+skill_mora_need_value.toLocaleString()+"&nbsp";

}


skill_slider_left.addEventListener("input",thum_move);
skill_slider_right.addEventListener("input",thum_move);
