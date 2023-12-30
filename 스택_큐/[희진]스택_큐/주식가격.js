function solution(prices) {
  //주식 가격이 오름차순으로 나열되어 있을 때, 현재 주식의 가격이 떨어지는 순간까지의 기간을 계산

  // 결과를 저장할 배열 초기화하고, 초기 상태는 모두 0으로 채움
  const answer = new Array(prices.length).fill(0);

  // 주식의 인덱스를 저장할 스택
  const stack = [];

  // 각 주식에 대해 순회
  for (let i = 0; i < prices.length; i++) {
    // 스택이 비어있지 않고, 현재 주식 가격이 스택의 맨 위 주식 가격보다 작을 때
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      // 스택에서 맨 위 주식을 꺼내서 떨어지지 않은 기간을 계산
      const top = stack.pop();
      answer[top] = i - top;
    }

    // 현재 주식의 인덱스를 스택에 추가
    stack.push(i);
  }

  // 스택에 남아있는 주식들의 떨어지지 않은 기간을 계산
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  // 최종 결과 반환
  return answer;
}
