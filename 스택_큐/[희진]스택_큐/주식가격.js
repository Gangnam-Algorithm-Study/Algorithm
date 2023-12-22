function solution(prices) {
  // 결과를 저장할 배열
  const answer = [];

  // 각 주식 가격에 대해 반복
  for (let i = 0; i < prices.length; i++) {
    // 현재 주식 가격으로부터 떨어지지 않은 기간을 저장할 변수
    let duration = 0;

    // 현재 주식 가격과 비교할 다음 시점의 주식 가격에 대해 반복
    for (let j = i + 1; j < prices.length; j++) {
      // 떨어지지 않은 기간을 1초씩 증가
      duration++;

      // 만약 현재 시점의 주식 가격이 다음 시점의 주식 가격보다 크다면
      if (prices[i] > prices[j]) {
        // 주식이 떨어졌으므로 반복 중단
        break;
      }
    }

    // 현재 주식 가격에 대한 떨어지지 않은 기간을 결과 배열에 추가
    answer.push(duration);
  }

  // 최종 결과 반환
  return answer;
}
