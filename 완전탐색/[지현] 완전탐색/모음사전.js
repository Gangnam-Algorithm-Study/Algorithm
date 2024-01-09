/*
단어 input 받아서 단어 철자로 만들 수 있는 모든 단어를 담은 사전에서 몇 번째 단어인지 return 

! 방법:
1. 단어를 array 형태로 나누어서 
2. 순열 구현해서 모든 경우의 수 모은다.
3. 경우의 수 사전에 맞게 오름차순 정렬 후 순서 구함

*/

function solution(word) {
    let answer = 0;
    let arr = ["A", "E", "I", "O", "U"];
    let dictionary = []; //사전 담을 배열
    for (let i = 1; i <= 5; i++) {
        //길이가 1부터 5 까지의 중복순열 모두 모아줄 반복문.
        let permutationList = permutationWithRepetition(arr, i);
        dictionary = dictionary.concat(permutationList);
    }
    dictionary.sort(); //사전 오름차순
    answer = dictionary.indexOf(word) + 1; //1부터 시작하기위해 +1
    return answer;
}

function permutationWithRepetition(array, length) {
    //원하는 길이 받아서 중복순열 만들어주는 함수.
    let result = [];
    function dfs(nowPerArr) {
        if (nowPerArr.length == length) {
            //목표길이 달성시 result에 추가 후 함수 종료
            result.push(nowPerArr.join("")); //문자열 형태 필요하기에 array.join('') 사용
            return;
        }
        for (let j = 0; j < 5; j++) {
            nowPerArr.push(array[j]);
            dfs(nowPerArr);
            nowPerArr.pop();
        }
    }
    dfs([]);
    return result;
}
