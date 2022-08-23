
console.log(1);

var test_div = document.getElementById('test_div');
test_div.innerHTML = "안녕&nbsp";


/*-------------텍스트 파일 읽는거 테스트------------------*/

function readTextFile(file) //텍스트 파일 경로를 input으로 받아서 줄변경 기준으로 짤라서 배열로 반환
{
    var rawFile = new XMLHttpRequest();
    var word = "";
    rawFile.open("GET", file, false);

    rawFile.onreadystatechange = function ()
    {

                var allText = rawFile.responseText;
                word = allText.split('\n');
                console.log(word);
    }
    rawFile.send(null);
    return word;

}

var text = readTextFile("test/testText.txt"); //파일 읽는 함수 호출
console.log(text);

test_div.innerHTML = test_div.innerHTML + text[0];

/*-----끝--------텍스트 파일 읽는거 테스트---------끝---------*/
