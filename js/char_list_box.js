
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


char_number = char_info1.length - 1;

for ( i =0; i<=char_number; i++){
  document.write("<button type='button' class='char_list_button' value="+i+" style='background-image:url(./img/char/"+char_info1[i][1]+"/profile.webp);'  onclick='log(this)'>");
  document.write("<div class='char_list_button_name'>"+char_info1[i][1]+"</div>")
  document.write("</button>")
}

document.write("</div>");


document.write("<div class='char_illust_box'>");


var t = document.querySelector(".char_list_button");
var y = t;

log(t);
function log(x){

  y.style.opacity = 0.6;
  x.style.opacity = 1.0;
  y= x;

  var num = parseInt(x.value);

  var temp = document.querySelector(".char_illust_box");

  temp.innerHTML =
  +"</div>"
  +"<div class='char_illust_box1'>"
  +"<img src='img/char/" +char_info1[num][1]+ "/illust.webp'>"
  +"</div>"
  +"<div class='char_info_box'>"
    +"<div class='char_name_box'>"
      +"<div class='char_name_txt'>"+char_info1[num][2]+"</div>"
      +"<div class='char_name_star'><img src='img/char/star/"+char_info1[num][0]+"Stars.webp'></div>"
      +"<div class='char_name_icon'>"
        +"<div class='icon'><img src='img/char/element/"+char_info1[num][3] + ".png'></div>"
        +"<div class='icon'><img src='img/char/weapon_type/"+char_info1[num][4]+".webp'></div>"
      +"</div>"
    +"</div>"
  +"<div class='char_promote_box'>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info1[num][5]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info1[num][6]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info1[num][7]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info1[num][8]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info1[num][9]+".webp' ></div>"
  +"<div class='promote_icon'><img src='img/char/material/"+char_info1[num][10]+".webp' ></div>"
  +"</div>"
  +"</div>";


}
