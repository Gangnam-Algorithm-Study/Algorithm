function solution(numbers) {
  // map((v) => v.toString())을 통해 각 숫자를 문자열로 변환
  // sort((a, b) => (b + a) - (a + b))를 통해 내림차순으로 정렬
  // (b + a) - (a + b)는 문자열로 조합한 숫자를 비교
  // join('')를 통해 문자열로 결합
  // 주어진 숫자 배열을 조합하여 만들어진 가장 큰 수를 나타내는 문자열이 "0"으로 시작한다면
  // 이는 해당 문자열이 0을 제외한 다른 숫자로 시작하는 것이 불가능하다는 뜻
  const answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([1, 2, 3]));
