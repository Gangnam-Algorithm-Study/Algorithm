
// ** 실패한 결과
// function solution(answers) {
//   const firstStudent = [1, 2, 3, 4, 5];
//   const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
//   const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   let pointObj = {};
//   let result = [];

//   for(let i = 0; i <= answers.length-1; i++) {
//     if (answers[i] === firstStudent[i % firstStudent.length]) {
//       pointObj[1] ? pointObj[1]++ : (pointObj[1] = 1);
//     }
//     if (answers[i] === secondStudent[i % secondStudent.length]) {
//       pointObj[2] ? pointObj[2]++ : (pointObj[2] = 1);
//     }
//     if (answers[i] === thirdStudent[i % thirdStudent.length]) {
//       pointObj[3] ? pointObj[3]++ : (pointObj[3] = 1);
//     }
//   }

//   for(let value in pointObj) {
//     if(Math.max(pointObj[value]) === pointObj[value]) {
//       result.push(Number(value));
//     } else {
//       return;
//     }
//   }

//   return result;
// }

function solution(answers) {
    // 반복되는 숫자만 배열에 담기
    const firstStudent = [1, 2, 3, 4, 5];
    const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // sumArr 초기 값 설정
    const sumArr = [0, 0, 0];

    // answer의 길이만큼 루프
    for (let i = 0; i < answers.length; i++) {
        if (firstStudent[i % firstStudent.length] === answers[i]) sumArr[0]++;
        if (secondStudent[i % secondStudent.length] === answers[i]) sumArr[1]++;
        if (thirdStudent[i % thirdStudent.length] === answers[i]) sumArr[2]++;
    }
    const maxValue = Math.max(...sumArr);
    let count = 0;
    let result = [];

    // 3번의 loop 실행
    // 최대값과 일치 시 요소 +1
    for (let i = 0; i < 3; i++) {
        if (maxValue === sumArr[i]) {
            result[count] = i + 1;
            count++;
        }
    }

    // 결과값 배열 리텅
    return result;
}

solution([1, 2, 3, 4, 5]);