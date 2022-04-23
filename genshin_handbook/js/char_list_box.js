var char_info = [
    [0,"엠버","엠버","fire","bow","불","꺼지지 않는 불씨","역전의 화살촉","등불꽃","자유","동풍의 숨결"],
    [1,"리사","리사","elec","book","번개","뇌광 프리즘","슬라임 원액","낙락베리","시문","동풍의 발톱"],
                ];






for ( i =0; i<=1; i++){
  document.write("<button type='button' class='char_list_button' value="+i+" style='background-image:url(./img/char/"+char_info[i][1]+"/profile.webp);'  onclick='log(this)'>");
  document.write("<div class='char_list_button_name'>"+char_info[i][1]+"</div>")
  document.write("</button>")
}

document.write("</div>");


document.write("<div class='char_illust_box'>");


var t = document.querySelector(".char_list_button");

log(t);
function log(x){
  var num = parseInt(x.value);

  var temp = document.querySelector(".char_illust_box");

  temp.innerHTML =
  +"</div>"
  +"<div class='char_illust_box1'>"
  +"<img src='img/char/" +char_info[num][1]+ "/illust.webp'>"
  +"</div>"
  +"<div class='char_info_box'>"
  +"<div class='char_name_box'>"
  +"<div class='char_name_txt'>"+char_info[num][2]+"</div>"
  +"<div class='char_name_icon'>"
  +"<div class='icon'><img src='img/char/element/"+char_info[num][3] + ".png'></div>"
  +"<div class='icon'><img src='img/char/weapon_type/"+char_info[num][4]+".webp'></div>"
  +"</div>"
  +"</div>"
  +"<div class='char_promote_box'>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info[num][5]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info[num][6]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info[num][7]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info[num][8]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info[num][9]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info[num][10]+".webp' ></div>"
  +"</div>"
  +"</div>";


}
