// 인덱스와 정답 배열에서 정답 인덱스를 구해오는 함수
function getAnswerNumber(answers, i) {
  return ((i + 1) % answers.length) - 1 < 0
    ? answers.length
    : ((i + 1) % answers.length) - 1;
}

function solution(answers) {
  // 각 수포자의 정답 배열
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answerSupo1 = 0;
  let answerSupo2 = 0;
  let answerSupo3 = 0;
  answers.forEach((answer, i) => {
    const num1 = getAnswerNumber(supo1, i);
    const num2 = getAnswerNumber(supo2, i);
    const num3 = getAnswerNumber(supo3, i);

    // 각 수포자의 정답이 맞았을 떄 카운트를 올려준다
    if (answer === supo1[num1]) {
      answerSupo1++;
    }
    if (answer === supo2[num2]) {
      answerSupo2++;
    }
    if (answer === supo3[num3]) {
      answerSupo3++;
    }
  });

  // 가장 많이 맞춘 수포자의 정답을 구한다
  const max = Math.max(...[answerSupo1, answerSupo2, answerSupo3]);
  const realAnswer = [];

  // 가장 많이 맞춘 수포자를 정답 배열에 넣는다
  if (answerSupo1 === max) {
    realAnswer.push(1);
  }
  if (answerSupo2 === max) {
    realAnswer.push(2);
  }
  if (answerSupo3 === max) {
    realAnswer.push(3);
  }

  return realAnswer;
}
