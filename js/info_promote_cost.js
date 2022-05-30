
function info_promote_cost_box_maker(id){

  var div = document.getElementById(id);
  var x = 0;
  if (id == "char_cost_box"){
    x = 0;
  }
  else{
    x = 1;
  }


  var head_text = ["돌파 재료","스킬 재료"]
  var category = ["char_cost","skill_cost"]
  var defalut_value = [[12,11,415,"1,673,400"],[10,16,903,"906,600"]]



}



info_promote_cost_box_maker("char_cost_box");
info_promote_cost_box_maker("skill_cost_box");
