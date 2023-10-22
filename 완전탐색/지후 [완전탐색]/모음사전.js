// DFS (깊이 우선 탐색) 함수 정의
const dfs = (word, length, result) => {
    // 사용 가능한 모음 배열에 담기
    const wordArr = [..."AEIOU"];
    // 목표 길이에 도달하면 현재 단어를 결과 배열에 추가하고 반환
    if (length === word.length) {
        result.push(word);
        return;
    }

    // 가능한 모음 조합을 반복하여 모든 경우를 탐색
    wordArr.forEach((vowel) => {
        dfs(word + vowel, length, result);
    });
}

// 주어진 단어 찾기 함수
function solution(word) {
    // 결과를 저장할 배열 초기화
    const result = [];
    // 초기 단어 생성
    const str = "";

    // 단어 길이가 1에서 5까지 가능한 모든 경우의 수를 생성
    for (let i = 1; i <= 5; i++) {
        // DFS 함수 호출로 가능한 모음 조합을 찾고 결과 배열에 저장
        dfs(str, i, result);
    }

    // 결과 배열을 알파벳순으로 정렬하고 주어진 단어의 인덱스를 찾아 반환
    return result.sort().indexOf(word) + 1;
}