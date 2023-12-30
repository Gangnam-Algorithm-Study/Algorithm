function solution(arr) {
    let answer = [];
    arr.filter((el, idx, array) => {
        if (el != array[idx + 1]) {
            answer.push(el);
        }
    });
    return answer;
}
