function solution(n, lost, reserve) {
  const clothes = new Array(n).fill(1); // 모든 학생에게 체육복이 있는 상태로 초기화

  // 체육복을 도난당한 학생 처리
  lost.forEach((student) => clothes[student - 1]--);

  // 여벌의 체육복이 있는 학생이 도난당한 학생에게 빌려주는 처리
  reserve.forEach((student) => clothes[student - 1]++);

  // 체육복을 빌려줄 수 있는지 검사하고, 가능한 경우 빌려주는 처리
  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0) {
      if (clothes[i - 1] === 2) {
        clothes[i]++;
        clothes[i - 1]--;
      } else if (clothes[i + 1] === 2) {
        clothes[i]++;
        clothes[i + 1]--;
      }
    }
  }

  // 수업을 들을 수 있는 학생의 수 계산
  return clothes.filter((c) => c > 0).length;
}
