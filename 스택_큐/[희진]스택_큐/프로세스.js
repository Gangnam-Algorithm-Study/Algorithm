function solution(priorities, location) {
  // 대기 큐 초기화(객체로 변환하여 새로운 배열을 생성)
  const queue = priorities.map((priority, index) => ({ priority, index }));

  // 실행 순서를 나타내는 변수
  let order = 0;

  while (queue.length > 0) {
    // 현재 큐에서 가장 높은 우선순위의 프로세스 추출
    const currentProcess = queue.shift();

    // 큐에 남아있는 프로세스 중 현재 프로세스보다 높은 우선순위가 있는지 확인
    const hasHigherPriority = queue.some(
      (process) => process.priority > currentProcess.priority
    );

    if (hasHigherPriority) {
      // 높은 우선순위가 있는 경우 현재 프로세스를 큐의 맨 뒤에 추가
      queue.push(currentProcess);
    } else {
      // 높은 우선순위가 없는 경우 실행 순서 증가 및 현재 프로세스 종료
      order++;

      // 만약 현재 프로세스가 찾고 있는 프로세스라면 결과 반환
      if (currentProcess.index === location) {
        return order;
      }
    }
  }

  // 여기까지 왔다면 에러 상황, 이 부분에 오면 안 됨
  return -1;
}
