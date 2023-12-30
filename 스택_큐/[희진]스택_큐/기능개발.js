function solution(progresses, speeds) {
  const answer = [];

  // progresses 배열과 speeds 배열을 순회하면서 각 작업이 배포되기까지 필요한 일수를 계산
  // 각 작업의 진도(progress)와 개발 속도(speeds)를 이용하여 남은 진도를 개발 속도로 나누고,
  // 그 결과에 대해 반올림(Math.ceil)을 수행하여 배포까지 필요한 일수를 계산
  const daysToDeploy = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  // 배포되는 작업의 수를 저장할 변수들을 초기화
  let maxDay = daysToDeploy[0]; // 현재까지의 최대 배포 일수
  let count = 1; // 현재 배포되는 작업의 수

  // 두 번째 작업부터 마지막 작업까지 반복문.
  for (let i = 1; i < daysToDeploy.length; i++) {
    // 현재 작업의 배포 일수가 최대 배포 일수 이하인 경우
    if (daysToDeploy[i] <= maxDay) {
      count++;
    } else {
      // 현재 작업이 더 늦게 배포되어야 할 때
      // 지금까지 세온 배포되는 작업의 수를 결과 배열에 추가하고 초기화
      answer.push(count);
      count = 1;

      // 최대 배포 일수를 현재 작업의 배포 일수로 갱신
      maxDay = daysToDeploy[i];
    }
  }

  // 마지막 작업까지 순회한 후에도 누적된 배포되는 작업의 수를 결과 배열에 추가
  answer.push(count);

  // 최종적으로 각 배포마다의 작업 수가 저장된 배열이 반환
  return answer;
}
