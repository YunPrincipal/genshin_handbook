

/*-------------텍스트 파일 읽기------------------*/

function readTextFile(file) //텍스트 파일 경로를 input으로 받아서 줄변경 기준으로 짤라서 배열로 반환
{
    var rawFile = new XMLHttpRequest();
    var word = "";
    var result = [];
    rawFile.open("GET", file, false);

    rawFile.onreadystatechange = function ()
    {

                var allText = rawFile.responseText;
                word = allText.split('\n');

                
                for(i=0; i<word.length; i++){
                    /*console.log(word[i]);*/
                    word1 = word[i].split(',');
                    /*console.log(word1);*/
                    result[i] = word1;
                }
 
    }
    rawFile.send(null);
    return result;

}

var char_info1 = readTextFile("js/char_info_text.txt"); //파일 읽는 함수 호출



/*-----끝--------텍스트 파일 읽기---------끝---------*/



  var head_text = ["캐릭터 돌파 재료","캐릭터 특성 재료"]
  var category = ["ascension","skill"]
  var defalut_value = [[1,9,9,6,18,30,36,46,168,"420,000"],[3,21,38,6,6,22,31,1,"1,652,500","x 1"]]

char_number = char_info1.length - 1;

/*---------------------콤보 박스 html-----------------*/
  ascension_combo_box_txt = "<select class='info_promote char_combo_box' name='char_name' onchange='ascension_combo_box_change(this.value)' >\n";
  for (i =0; i<=char_number; i++){
    ascension_combo_box_txt += "<option value='"+i+"'>"+char_info1[i][1]+"</option>\n";
  }
  ascension_combo_box_txt += "</select>";

  skill_combo_box_txt = "<select class='info_promote char_combo_box' name='char_name' onchange='skill_combo_box_change(this.value)' >\n";
  for (i =0; i<=char_number; i++){
    skill_combo_box_txt += "<option value='"+i+"'>"+char_info1[i][1]+"</option>\n";
  }
  skill_combo_box_txt += "</select>";




/*----------------------캐릭터 돌파 재료 html------------------------*/
function info_promote_char_ascension_box_maker(id){

  var div = document.getElementById(id);
  var x = 0;

  div.innerHTML = "<div class='info_promote head "+category[x]+"' >"+head_text[x]
                  +"<div class='info_promote char_combo_box_form "+category[x]+"'>"
                  +ascension_combo_box_txt
                  +"</div>"
                  +"</div>"
                  +"<div class='info_promote material_box "+category[x]+" line1'>"
                    +"<div class='info_promote material number1'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_1' src='img/char/material/"+char_info1[0][5]+"0.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_1'>"+defalut_value[x][0]+"</div></div>"
                    +"<div class='info_promote material number2'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_2' src='img/char/material/"+char_info1[0][5]+"1.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_2'>"+defalut_value[x][1]+"</div></div>"
                    +"<div class='info_promote material number3'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_3' src='img/char/material/"+char_info1[0][5]+"2.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_3'>"+defalut_value[x][2]+"</div></div>"
                    +"<div class='info_promote material number4'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_4' src='img/char/material/"+char_info1[0][5]+"3.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_4'>"+defalut_value[x][3]+"</div></div>"
                  +"</div>"

                  +"<div class='info_promote material_box "+category[x]+" line2'>"
                    +"<div class='info_promote material number5'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_5' src='img/char/material/"+char_info1[0][8]+"0.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_5'>"+defalut_value[x][4]+"</div></div>"
                    +"<div class='info_promote material number6'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_6' src='img/char/material/"+char_info1[0][8]+"1.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_6'>"+defalut_value[x][5]+"</div></div>"
                    +"<div class='info_promote material number7'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_7' src='img/char/material/"+char_info1[0][8]+".webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_7'>"+defalut_value[x][6]+"</div></div>"
                  +"</div>"

                  +"<div class='info_promote material_box "+category[x]+" line3'>"
                    +"<div class='info_promote material number8'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_8' src='img/char/material/"+char_info1[0][6]+".webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_8'>"+defalut_value[x][7]+"</div></div>"
                    +"<div class='info_promote material number9'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_9' src='img/char/material/"+char_info1[0][7]+".webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_9'>"+defalut_value[x][8]+"</div></div>"
                    +"<div class='info_promote material number_mora "+category[x]+"'>"
                      +"<img class='info_promote icon mora' src='img/info_promote/icon_mora.webp'>"
                      +"<div class='info_promote txt mora' id='"+category[x]+"_mora_ascension_txt'>"+defalut_value[x][9]+"</div>"
                    +"</div>"

                  +"</div>"

                  div.innerHTML = div.innerHTML+"<div class='info_promote material lv_box "+category[x]+"'>"
                                        +"<div class='info_promote txt lv' id='"+category[x]+"_lv_x'>1</div>"
                                        +"<div class='info_promote txt'>&nbsp&nbsp&nbsp&nbsp&nbspto&nbsp&nbsp&nbsp&nbsp&nbsp</div>"
                                        +"<div class='info_promote txt lv' id='"+category[x]+"_lv_y'>90</div>"
                                      +"</div>"
                                      +"<div class='info_promote material slider_box "+category[x]+"'>"
                                      +"<input type='range' class='info_promote exp_slider "+category[x]+"'  id='"+category[x]+"_exp_slider' min='0' max='7' value='7' step='1' list='slider_datalist'/>"
                                      +"<input type='range' class='info_promote exp_slider "+category[x]+"' id='"+category[x]+"_exp_slider1' min='0' max='7' value='0' step='1' list='slider_datalist'/>"
                                      +"<div class='info_promote exp_slider_track "+category[x]+"'>"
                                        +"<div class='info_promote exp_slider_range' id='range_"+category[x]+"'></div>"
                                        +"<div class='info_promote exp_slider_thumb "+category[x]+"' id='"+category[x]+"_num1'></div>"
                                        +"<div class='info_promote exp_slider_thumb "+category[x]+"' id='"+category[x]+"_num2'></div>"
                                      +"</div>"

                                      +"<datalist class='info_promote exp_slider_datalist "+category[x]+"' id='slider_datalist'>"
                                        +"<option value='1' label='1'></option>"
                                        +"<option value='20' label='20'></option>"
                                        +"<option value='40' label='40'></option>"
                                        +"<option value='50' label='50'></option>"
                                        +"<option value='60' label='60'></option>"
                                        +"<option value='70' label='70'></option>"
                                        +"<option value='80' label='80'></option>"
                                        +"<option value='90' label='90'></option></datalist>"
                                    +"</div>"

}

/*------------------------캐릭터 특성 재료 html----------------------*/
function info_promote_char_skill_box_maker(id){

  var div = document.getElementById(id);
 var x = 1;


 div.innerHTML = "<div class='info_promote head "+category[x]+"' >"+head_text[x]
 +"<div class='info_promote char_combo_box_form number_multiply'>"
   +"<select class='info_promote char_combo_box multiply' id='"+category[x]+"_multiply_select' >"
   +"<option value='1'>x 1</option>"
   +"<option value='2'>x 2</option>"
   +"<option value='3'>x 3</option>"
   +"</select></div>"
                 +"<div class='info_promote char_combo_box_form "+category[x]+"'>"
                 +skill_combo_box_txt
                 +"</div>"
                 +"</div>"
                 +"<div class='info_promote material_box "+category[x]+" line1'>"
                   +"<div class='info_promote material number1'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_1' src='img/char/material/"+char_info1[0][9]+"0.webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_1'>"+defalut_value[x][0]+"</div></div>"
                   +"<div class='info_promote material number2'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_2' src='img/char/material/"+char_info1[0][9]+"1.webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_2'>"+defalut_value[x][1]+"</div></div>"
                   +"<div class='info_promote material number3'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_3' src='img/char/material/"+char_info1[0][9]+"2.webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_3'>"+defalut_value[x][2]+"</div></div>"
                 +"</div>"

                 +"<div class='info_promote material_box "+category[x]+" line2'>"
                   +"<div class='info_promote material number5'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_5' src='img/char/material/"+char_info1[0][8]+"0.webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_5'>"+defalut_value[x][4]+"</div></div>"
                   +"<div class='info_promote material number6'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_6' src='img/char/material/"+char_info1[0][8]+"1.webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_6'>"+defalut_value[x][5]+"</div></div>"
                   +"<div class='info_promote material number7'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_7' src='img/char/material/"+char_info1[0][8]+".webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_7'>"+defalut_value[x][6]+"</div></div>"

                 +"</div>"

                 +"<div class='info_promote material_box "+category[x]+" line3'>"
                   +"<div class='info_promote material number4'>"
                     +"<img class='info_promote icon' id='"+category[x]+"_material_icon_4' src='img/char/material/"+char_info1[0][10]+".webp'>"
                     +"<div class='info_promote txt' id='"+category[x]+"_material_4'>"+defalut_value[x][3]+"</div></div>"
                    +"<div class='info_promote material number7'>"
                      +"<img class='info_promote icon' id='"+category[x]+"_material_icon_8' src='img/char/material/왕관.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_material_8'>"+defalut_value[x][7]+"</div></div>"
                   +"<div class='info_promote material number_mora "+category[x]+"'>"
                     +"<img class='info_promote icon mora' src='img/info_promote/icon_mora.webp'>"
                     +"<div class='info_promote txt mora' id='"+category[x]+"_mora_skill_txt'>"+defalut_value[x][8]+"</div>"
                   +"</div>"
                 +"</div>"

                 div.innerHTML = div.innerHTML+"<div class='info_promote material lv_box "+category[x]+"'>"
                                       +"<div class='info_promote txt lv' id='"+category[x]+"_lv_x'>1</div>"
                                       +"<div class='info_promote txt'>&nbsp&nbsp&nbsp&nbsp&nbspto&nbsp&nbsp&nbsp&nbsp&nbsp</div>"
                                       +"<div class='info_promote txt lv' id='"+category[x]+"_lv_y'>10</div>"
                                     +"</div>"
                                     +"<div class='info_promote material slider_box "+category[x]+"'>"
                                     +"<input type='range' class='info_promote exp_slider "+category[x]+"'  id='"+category[x]+"_exp_slider' min='0' max='9' value='9' step='1' list='slider_datalist'/>"
                                     +"<input type='range' class='info_promote exp_slider "+category[x]+"' id='"+category[x]+"_exp_slider1' min='0' max='9' value='0' step='1' list='slider_datalist'/>"
                                     +"<div class='info_promote exp_slider_track "+category[x]+"'>"
                                       +"<div class='info_promote exp_slider_range' id='range_"+category[x]+"'></div>"
                                       +"<div class='info_promote exp_slider_thumb "+category[x]+"' id='"+category[x]+"_num1'></div>"
                                       +"<div class='info_promote exp_slider_thumb "+category[x]+"' id='"+category[x]+"_num2'></div>"
                                     +"</div>"

                                     +"<datalist class='info_promote exp_slider_datalist "+category[x]+"' id='slider_datalist'>"
                                       +"<option value='1' label='1'></option>"
                                       +"<option value='2' label='2'></option>"
                                       +"<option value='3' label='3'></option>"
                                       +"<option value='4' label='4'></option>"
                                       +"<option value='5' label='5'></option>"
                                       +"<option value='6' label='6'></option>"
                                       +"<option value='7' label='7'></option>"
                                       +"<option value='8' label='8'></option>"
                                       +"<option value='9' label='9'></option>"
                                       +"<option value='10' label='10'></option></datalist>"
                                   +"</div>"

}

/*---------------------캐릭터 콤보박스 cahnge 함수---------------------------------*/
function ascension_combo_box_change(value){
  var num = parseInt(value);
  var name = char_info1[num][1];

  for(i=0; i<=3; i++){
    icon_id = "ascension_material_icon_" + String(i+1);
    temp = document.getElementById(icon_id);
    temp.src = './img/char/material/'+char_info1[num][5]+String(i)+'.webp';
  }

  for(i=4; i<=6; i++){
    icon_id = "ascension_material_icon_" + String(i+1);
    temp = document.getElementById(icon_id);
    temp.src = './img/char/material/'+char_info1[num][8]+String(i-4)+'.webp';
  }

  document.getElementById("ascension_material_icon_8").src = './img/char/material/'+char_info1[num][6]+'.webp';
  document.getElementById("ascension_material_icon_9").src = './img/char/material/'+char_info1[num][7]+'.webp';

}

function skill_combo_box_change(value){
  var num = parseInt(value);
  var name = char_info1[num][1];

  for(i=0; i<=2; i++){
    icon_id = "skill_material_icon_" + String(i+1);
    temp = document.getElementById(icon_id);
    temp.src = './img/char/material/'+char_info1[num][9]+String(i)+'.webp';
  }

  for(i=4; i<=6; i++){
    icon_id = "skill_material_icon_" + String(i+1);
    temp = document.getElementById(icon_id);
    temp.src = './img/char/material/'+char_info1[num][8]+String(i-4)+'.webp';
  }

  document.getElementById("skill_material_icon_4").src = './img/char/material/'+char_info1[num][10]+'.webp';

}



info_promote_char_ascension_box_maker("char_ascension_box");
info_promote_char_skill_box_maker("char_skill_box");
