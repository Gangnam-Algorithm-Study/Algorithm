function solution(numbers, target) {
  let count = 0;

  // 모든 가능한 조합을 탐색
  const getAnswer = (index, currentSum) => {
    // 현재 인덱스가 숫자 배열의 길이와 같으면 종료
    if (index === numbers.length) {
      // 현재까지의 합이 타겟과 같으면 카운트를 증가시킴
      if (currentSum === target) {
        count++;
      }
      return; // 재귀 종료
    }

    // 현재 숫자를 더하거나 빼는 두 가지 경우를 각각 호출
    // 더하기
    getAnswer(index + 1, currentSum + numbers[index]);

    // 빼기
    getAnswer(index + 1, currentSum - numbers[index]);
  };

  // 초기 호출: 인덱스 0부터 시작하고, 현재 합은 0
  getAnswer(0, 0);

  // 모든 조합을 탐색하고 나면 결과를 반환
  return count;
}
