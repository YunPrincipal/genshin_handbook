var char_info = [
    [5,"각청","각청","elec","sword","번개","뇌광 프리즘","콜 라피스","원소 꽃꿀","번영","북풍의 고리"],
    [5,"감우","감우","ice","bow","얼음","서리의 핵","청심","원소 꽃꿀","근면","무예의혼 고영"],
    [4,"고로","고로","stone","bow","바위","영구 장치의 코어","산호 진주","떠도는 정령 코어","천광","용해의 순간"],
    [4,"노엘","노엘","stone","claymore","바위","현암의 탑","낙락베리","불길한 가면","투쟁","동풍의 발톱"],
    [5,"다이루크","다이루크","fire","claymore","불","꺼지지 않는 불씨","등불꽃","위관의 휘장","투쟁","동풍의 깃털"],
    [4,"디오나","디오나","ice","bow","얼음","서리의 핵","통통 연꽃","역전의 화살촉","자유","마왕의 칼날 조각"],
    [5,"라이덴","라이덴 쇼군","elec","polearm","번개","뇌정의 구슬","아마쿠모초 열매","명검 코등이","천광","용해의 순간"],
    [4,"레이저","레이저","elec","claymore","번개","뇌광 프리즘","고리고리 열매","불길한 가면","투쟁","동풍의 발톱"],
    [4,"로자리아","로자리아","ice","polearm","얼음","서리의 핵","낙락베리","위관의 휘장","시문","무예의혼 고영"],
    [4,"리사","리사","elec","book","번개","뇌광 프리즘","낙락베리","슬라임 원액","시문","동풍의 발톱"],
    [5,"모나","모나","water","book","물","물처럼 맑은 마음","바람버섯","원소 꽃꿀","투쟁","북풍의 고리"],
    [4,"바바라","바바라","water","book","물","물처럼 맑은 마음","바람버섯","금주의 두루마리","자유","북풍의 고리"],
    [4,"베넷","베넷","fire","sword","불","꺼지지 않는 불씨","풍차 국화","골드 까마귀 휘장","투쟁","동풍의 깃털"],
    [5,"벤티","벤티","wind","bow","바람","폭풍의 씨앗","세실리아 꽃","슬라임 원액","시문","북풍의 꼬리"],
    [4,"북두","북두","elec","claymore","번개","뇌광 프리즘","야박석","골드 까마귀 휘장","황금","동풍의 숨결"],
    [4,"사라","쿠죠 사라","elec","bow","번개","뇌정의 구슬","혈곡","불길한 가면","풍아","재가 된 심장"],
    [4,"사유","사유","wind","claymore","바람","꼭두각시 부품","수정 골수","원소 꽃꿀","천광","순금의 비늘"],
    [4,"설탕","설탕","wind","book","바람","폭풍의 씨앗","풍차 국화","원소 꽃꿀","자유","북풍의 영혼상자"],
    [5,"소","소","wind","polearm","바람","설익은 옥","청심","슬라임 원액","번영","무예의혼 고영"],
    [4,"시노부","쿠키 시노부","elec","sword","번개","룬 무늬 이빨","울림풀","떠도는 정령 코어","풍아","액운을 쫓는 눈물"],
    [4,"신염","신염","fire","claymore","불","꺼지지 않는 불씨","유리주머니","골드 까마귀 휘장","황금","하늘을 삼킨 고래 뿔"],
    [5,"신학","신학","ice","polearm","얼음","용 자손의 가짜 지느러미","청심","원소 꽃꿀","번영","지옥불 나비"],
    [5,"아야카","카미사토 아야카","ice","sword","얼음","영구 장치의 코어","벚꽃 수구","명검 코등이","풍아","혈옥의 가지"],
    [5,"아야토","카미사토 아야토","water","sword","물","배척의 이슬","벚꽃 수구","명검 코등이","풍아","흉장의 수안"],
    [5,"알베도","알베도","stone","sword","바위","현암의 탑","세실리아 꽃","금주의 두루마리","시문","하늘을 삼킨 고래 뿔"],
    [5,"야란","야란","water","bow","물","룬 무늬 이빨","별소라","위관의 휘장","번영","용왕의 면류관"],
    [5,"야에","야에 미코","elec","book","번개","용 자손의 가짜 지느러미","바다 불로초","명검 코등이","천광","만겁의 진의"],
    [5,"에일로이","에일로이","ice","bow","얼음","응결의 꽃","수정 골수","떠도는 정령 코어","자유","용해의 순간"],
    [4,"엠버","엠버","fire","bow","불","꺼지지 않는 불씨","등불꽃","역전의 화살촉","자유","동풍의 숨결"],
    [4,"연비","연비","fire","book","불","설익은 옥","야박석","골드 까마귀 휘장","황금","혈옥의 가지"],
    [5,"요이미야","요이미야","fire","bow","불","무형의 불 구슬","울림풀","금주의 두루마리","부세","용왕의 면류관"],
    [4,"운근","운근","stone","polearm","바위","수계 늑대왕의 그릇","유리백합","불길한 가면","근면","재가 된 심장"],
    [5,"유라","유라","ice","claymore","얼음","응결의 꽃","민들레 씨앗","불길한 가면","투쟁","용왕의 면류관"],
    [4,"응광","응광","stone","book","바위","현암의 탑","유리백합","위관의 휘장","번영","북풍의 영혼상자"],
    [5,"이토","아라타키 이토","stone","claymore","바위","수계 늑대왕의 그릇","귀신 풍뎅이","슬라임 원액","풍아","재가 된 심장"],
    [5,"종려","종려","stone","polearm","바위","현암의 탑","콜 라피스","슬라임 원액","황금","하늘을 삼킨 고래 뿔"],
    [4,"중운","중운","ice","claymore","얼음","서리의 핵","콜 라피스","불길한 가면","근면","동풍의 숨결"],
    [5,"진","진","wind","sword","바람","폭풍의 씨앗","민들레 씨앗","불길한 가면","투쟁","동풍의 깃털"],
    [5,"치치","치치","ice","sword","얼음","서리의 핵","유리주머니","금주의 두루마리","번영","북풍의 꼬리"],
    [5,"카즈하","카에데하라 카즈하","wind","sword","바람","꼭두각시 부품","바다 불로초","골드 까마귀 휘장","근면","순금의 비늘"],
    [4,"케이아","케이아","ice","sword","얼음","서리의 핵","통통 연꽃","골드 까마귀 휘장","시문","북풍의 영혼상자"],
    [5,"코코미","산고노미야 코코미","water","book","물","배척의 이슬","산호 진주","떠도는 정령 코어","부세","지옥불 나비"],
    [4,"콜레이","콜레이","dendro","bow","풀","버섯왕의 뾰족한 부리","룩카데바타 성체 버섯","역전의 화살촉","실천","액운을 쫓는 눈물"],
    [5,"클레","클레","fire","book","불","꺼지지 않는 불씨","바람버섯","금주의 두루마리","자유","북풍의 고리"],
    [5,"타르탈리야","타르탈리야","water","bow","물","물처럼 맑은 마음","별소라","위관의 휘장","자유","마왕의 칼날 조각"],
    [5,"타이나리","타이나리","dendro","bow","풀","버섯왕의 뾰족한 부리","달 연꽃","포낭 결정 가루","간언","만겁의 진의"],
    [4,"토마","토마","fire","polearm","불","무형의 불 구슬","형광 버섯","골드 까마귀 휘장","부세","지옥불 나비"],
    [4,"피슬","피슬","elec","bow","번개","뇌광 프리즘","등불꽃","역전의 화살촉","시문","북풍의 영혼상자"],
    [4,"행추","행추","water","sword","물","물처럼 맑은 마음","예상꽃","불길한 가면","황금","북풍의 꼬리"],
    [4,"향릉","향릉","fire","polearm","불","꺼지지 않는 불씨","절운고추","슬라임 원액","근면","동풍의 발톱"],
    [4,"헤이조","시카노인 헤이조","wind","book","바람","룬 무늬 이빨","귀신 풍뎅이","골드 까마귀 휘장","부세","만겁의 진의"],
    [5,"호두","호두","fire","polearm","불","설익은 옥","예상꽃","원소 꽃꿀","근면","마왕의 칼날 조각"]
    ];



char_number = char_info.length - 1;

for ( i =0; i<=char_number; i++){
  document.write("<button type='button' class='char_list_button' value="+i+" style='background-image:url(./img/char/"+char_info[i][1]+"/profile.webp);'  onclick='log(this)'>");
  document.write("<div class='char_list_button_name'>"+char_info[i][1]+"</div>")
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
  +"<img src='img/char/" +char_info[num][1]+ "/illust.webp'>"
  +"</div>"
  +"<div class='char_info_box'>"
    +"<div class='char_name_box'>"
      +"<div class='char_name_txt'>"+char_info[num][2]+"</div>"
      +"<div class='char_name_star'><img src='img/char/star/"+char_info[num][0]+"Stars.webp'></div>"
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
