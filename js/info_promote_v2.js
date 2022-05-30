
function info_promote_box_maker(id){

  var div = document.getElementById(id);
  var x = 0;
  if (id == "char_box"){
    x = 0;
  }
  else{
    x = 1;
  }

  var head_text = ["캐릭터 경험치","무기 경험치"]
  var category = ["char","weapon"]
  var defalut_value = [[12,11,415,"1,673,400"],[10,16,903,"906,600"]]

  div.innerHTML = "<div class='info_promote head "+category[x]+"' >"+head_text[x]+"</div>"
                  +"<div class='info_promote material_box "+category[x]+"'>"
                    +"<div class='info_promote material number1'>"
                      +"<img class='info_promote icon' src='img/info_promote/"+category[x]+"_exp_1.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_exp_1'>"+defalut_value[x][0]+"</div></div>"
                    +"<div class='info_promote material number2'>"
                      +"<img class='info_promote icon' src='img/info_promote/"+category[x]+"_exp_2.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_exp_2'>"+defalut_value[x][1]+"</div></div>"
                    +"<div class='info_promote material number3'>"
                      +"<img class='info_promote icon' src='img/info_promote/"+category[x]+"_exp_3.webp'>"
                      +"<div class='info_promote txt' id='"+category[x]+"_exp_3'>"+defalut_value[x][2]+"</div></div>"
                  +"</div>"


                  +"<div class='info_promote material number_mora "+category[x]+"'>"
                    +"<img class='info_promote icon mora' src='img/info_promote/icon_mora.webp'>"
                    +"<div class='info_promote txt mora' id='"+category[x]+"_mora_txt'>"+defalut_value[x][3]+"</div>"
                  +"</div>"
// 무기 등급 고르기
                  if(x == 1){
                    div.innerHTML =div.innerHTML+
                    "<div class='info_promote weapon_star_box'>"
                    +"<input type='radio' name='radio1' id='weapon_star_5' checked='checked' value='2' onclick='thum_move(this);'>"
                    +"<label class='info_promote weapon_exp_label' for='weapon_star_5'>&nbsp★★★★★&nbsp</label>"
                    +"<input type='radio' name='radio1' id='weapon_star_4' value='1' onclick='thum_move(this);'>"
                    +"<label class='info_promote weapon_exp_label' for='weapon_star_4'>&nbsp&nbsp★★★★&nbsp&nbsp</label>"
                    +"<input type='radio' name='radio1' id='weapon_star_3' value='0' onclick='thum_move(this);'>"
                    +"<label class='info_promote weapon_exp_label' for='weapon_star_3'>&nbsp&nbsp&nbsp★★★&nbsp&nbsp&nbsp</label>"
                    +"</div>"
                  }
//

div.innerHTML = div.innerHTML+"<div class='info_promote material lv_box "+category[x]+"'>"
                      +"<div class='info_promote txt lv' id='"+category[x]+"_lv_x'>1</div>"
                      +"<div class='info_promote txt'>&nbsp&nbspto&nbsp&nbsp</div>"
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

info_promote_box_maker("char_box");
info_promote_box_maker("weapon_box");
