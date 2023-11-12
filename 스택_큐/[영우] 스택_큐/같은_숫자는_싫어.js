function solution(arr) {
  let answer = [];

  arr.forEach((num, i) => {
    // i 가 0번째이거나 이전 값과 다르면
    if (i === 0 || arr[i - 1] !== num) {
      // 정답 배열에 추가한다
      answer.push(num);
    }
  });

  return answer;
}
