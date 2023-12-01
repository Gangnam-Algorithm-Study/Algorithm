function solution(citations) {
  // 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 H-Index
  // 내림차순으로 인용횟수가 높은 논문부터 계산
  // 현재 인덱스(i)가 논문의 인용 횟수보다 작다면, 현재 논문은 최소한 i+1번 인용
  citations.sort((a, b) => b - a);

  let answers = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answers++;
    }
  }

  return answers;
}
