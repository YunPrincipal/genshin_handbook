var info_box = document.querySelector('.index_info_box_item');
var info_box_item = [["mon","월 목"],["tue","화 금"],["wed","수 토"]];




for ( i =0; i<=2; i++){
    var dir_name = "./img/index/"+info_box_item[i][0];
    document.write("<div class='index_info_box_item' id="+info_box_item[i][0]+">");
    document.write("<div class='index_info_box_item txt'>"+info_box_item[i][1]+"</div>");
    document.write("<div class='index_info_box_item img'>");

      for ( j =0; j<=5; j++){
        var img_name = dir_name+"/"+String(j+1)+"_.webp";
        console.log(img_name);
        document.write("<img src='"+img_name+"' class='index_info_box_item_img'>");
      }
      document.write("</div>");
      document.write("</div>");

}
