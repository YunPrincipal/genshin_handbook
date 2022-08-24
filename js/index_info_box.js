var info_box = document.querySelector('.index_info_box_item');
var info_box_item = [["mon","월 목"],["tue","화 금"],["wed","수 토"]];
var info_box_item_name=[["자유","번영","부세","간언","고탑","고운한림","먼바다","숲의이슬"],
                        ["투쟁","근면","풍아","창의","칼바람","안개구름","나루카미","오아시스"],
                        ["시문","황금","천광","실천","라이언","흑운철","금석극화","태양"]
                        ];




for ( i =0; i<=2; i++){
    var dir_name = "./img/index/"+info_box_item[i][0];
    document.write("<div class='index_info_box_item' id="+info_box_item[i][0]+">");
    document.write("<div class='index_info_box_item txt'>"+info_box_item[i][1]+"</div>");
    document.write("<div class='index_info_box_item img'>");

      for ( j =0; j<=7; j++){
        var img_name = info_box_item_name[i][j];
        document.write("<div style='background-image:url(./img/char/material/"+img_name+".webp);'"+" class='index_info_box_item_img'>");
        document.write("<div class='index_info_box_item_name'>"+img_name+"</div>")
        document.write("</div>")
      }
      document.write("</div>");
      document.write("</div>");

}
