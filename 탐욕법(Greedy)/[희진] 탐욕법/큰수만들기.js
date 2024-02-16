function solution(number, k) {
  const stack = []; // 가장 큰 숫자를 만들기 위해 사용할 스택

  for (let i = 0; i < number.length; i++) {
    const current = number[i]; // 현재 숫자를 가져옴

    // 스택의 마지막 숫자가 현재 숫자보다 작은 경우, 스택에서 제거
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
      stack.pop();
      k--;
    }

    // 현재 숫자를 스택에 추가
    stack.push(current);
  }

  // 남은 제거 횟수가 있다면, 스택에서 뒤에서부터 제거
  while (k > 0) {
    stack.pop();
    k--;
  }

  // 스택에 남은 숫자들을 문자열로 변환하여 반환
  return stack.join("");
}
