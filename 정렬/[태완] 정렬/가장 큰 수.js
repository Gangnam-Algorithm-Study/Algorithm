// 원소가 [0] 1개 일 수 있어서 삼항연산자로 0 처리

function solution(numbers) {
  const answer = numbers
    .map((numbers) => String(numbers))
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
