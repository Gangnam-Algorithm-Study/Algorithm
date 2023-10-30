// 소수를 판별하는 함수
const isPrimeNum = (num) => {
  // 1보다 작거나 같으면 소수가 아님
  if (num <= 1) return false;

  // 현재 숫자보다 작거나 같은 숫자로 나눴을 때 0으로 나눠떨어지면 소수가 아님
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  // 나머지는 소수임
  return true;
};

/**
 * 아이디어
 * 1. 재귀함수로, 주어진 배열에서 순열을 만든다
 * 2. 소수 판별식을 만든다
 */
function solution(numbers) {
  const answer = [];
  let nums = numbers.split("");

  // 재귀함수로 호출하여 순열을 만드는 함수
  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      arr.forEach((val, i) => {
        // 순회하는 값에 fixed 를 붙여서 새로운 숫자를 만든다
        const newNum = fixed + val;
        // 받아온 arr 를 깊은 복사하고
        const copyArr = [...arr];
        // 복사한 배열에서 현재 순회하는 값을 제거한다
        copyArr.splice(i, 1);

        // 답 배열에 없고, 소수이면
        if (!answer.includes(Number(newNum)) && isPrimeNum(Number(newNum))) {
          // 답 배열에 넣는다
          answer.push(Number(newNum));
        }

        // 현재 값을 제거한 복사 배열과, 새로 만든 숫자를 넣고 다시 함수 호출해서 재귀적으로 실행한다
        getPermutation(copyArr, newNum);
      });
    }
  };

  getPermutation(nums, "");
  return answer.length;
}
