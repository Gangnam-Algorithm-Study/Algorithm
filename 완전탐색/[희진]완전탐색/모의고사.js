function solution(answers) {
  // 각 수포자의 패턴 정의
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0]; // 각 수포자의 점수를 저장하는 배열

  // 정답 배열을 순회하면서 각 수포자의 답과 비교하여 점수를 계산
  for (let i = 0; i < answers.length; i++) {
    // 각 패턴의 길이로 나머지를 계산하여 순환
    // 현재 인덱스에 해당하는 패턴의 답과 비교하여 맞으면 점수를 증가
    if (answers[i] === pattern1[i % pattern1.length]) {
      scores[0]++;
    }
    if (answers[i] === pattern2[i % pattern2.length]) {
      scores[1]++;
    }
    if (answers[i] === pattern3[i % pattern3.length]) {
      scores[2]++;
    }
  }

  // 최대 점수를 가진 수포자들 찾기
  const maxScore = Math.max(...scores); // 최대 점수 계산
  const winners = [];

  // 최대 점수를 가진 수포자들 결과 배열에 추가
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      winners.push(i + 1);
    }
  }

  return winners; // 최대 점수를 가진 수포자들 배열을 반환
}
