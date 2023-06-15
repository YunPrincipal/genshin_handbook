


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

document.write("<select name = 'char_name'>");
for (i =0; i<=char_number; i++){
  document.write("<option value='"+char_info1[i][1]+"'>"+char_info1[i][1]+"</option>");
}
document.write("</select>");
