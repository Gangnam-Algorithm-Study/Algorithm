//배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수 구하기
//commands= [[i, j, k], [i,j,k],... ]
function solution(array, commands) {
    var answer = [];

    for (i of commands) {
        let arr2 = [...array];
        let tmp = arr2.slice(i[0] - 1, i[1]).sort((a, b) => a - b); //js sort()시 py와 형식 다름 주의 !
        // console.log(tmp)
        answer.push(tmp[i[2] - 1]);
    }
    return answer;
}
