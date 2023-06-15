
console.log(1);

var test_div = document.getElementById('test_div');
test_div.innerHTML = "안녕&nbsp";


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

var text = readTextFile("test/test1.txt"); //파일 읽는 함수 호출
console.log(text);
for(i=0; i<text.length; i++){
    test_div.innerHTML = test_div.innerHTML + text;
}


/*-----끝--------텍스트 파일 읽기---------끝---------*/
