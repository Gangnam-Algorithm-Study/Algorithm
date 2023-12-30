function solution(s) {
  // 여는 괄호를 저장할 스택
  const stack = [];

  // 문자열을 순회합니다.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // 여는 괄호인 경우 스택에 push
      stack.push("(");
    } else if (s[i] === ")") {
      // 닫는 괄호인 경우 스택에서 pop하여 짝이 맞는지 확인
      if (stack.length === 0) {
        // 스택이 비어있는데 닫는 괄호를 만나면 올바르지 않은 괄호
        return false;
      }
      stack.pop();
    }
  }

  // 문자열을 모두 탐색한 후에 스택이 비어있으면 올바른 괄호
  return stack.length === 0;
}
