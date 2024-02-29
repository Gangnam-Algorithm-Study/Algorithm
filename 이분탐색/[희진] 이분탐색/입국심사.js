function solution(n, times) {
  let minTime = 1; // 가능한 최소 시간
  let maxTime = Math.max(...times) * n; // 가능한 최대 시간 (가장 오래 걸리는 심사관에게 모든 사람을 심사받는 경우)

  let answer = maxTime; // 최종 답으로 설정할 시간 변수

  // 이진 탐색
  while (minTime <= maxTime) {
    const midTime = Math.floor((minTime + maxTime) / 2); // 중간 시간

    let count = 0; // 중간 시간 동안 심사받을 수 있는 사람의 수

    // 모든 심사관에 대해 중간 시간 동안 처리할 수 있는 사람의 수 계산
    for (const time of times) {
      count += Math.floor(midTime / time); // 중간 시간 동안 해당 심사관이 처리할 수 있는 사람의 수를 더함
    }

    if (count >= n) {
      // 중간 시간 동안 심사받을 수 있는 사람의 수가 n 이상이면, 최대 시간을 줄여나감
      answer = Math.min(answer, midTime); // 최솟값 업데이트
      maxTime = midTime - 1; // 최대 시간을 줄여나감
    } else {
      // 중간 시간 동안 심사받을 수 있는 사람의 수가 n 미만이면, 최소 시간을 늘려나감
      minTime = midTime + 1; // 최소 시간을 늘려나감
    }
  }

  return answer; // 최종적으로 구한 최적의 시간을 반환
}
