/**
 * 아이디어
 * 각 문자열을 순회하면서 열리고 닫힌 걸 count 로 센다
 * 1. ( 가 나오면 count++
 * 2. ) 가 나오면 count--
 * 3. count 가 0보다 작으면 false
 * 4. count 가 0이면 true
 * 5. count 가 0보다 크면 false
 */

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0 ? true : false;
}
