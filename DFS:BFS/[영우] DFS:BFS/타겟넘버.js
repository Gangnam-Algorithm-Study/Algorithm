/**
 * 아이디어: dfs 를 사용하여 모든 경우의 수를 구한다
 * 1. dfs 함수를 선언한다
 * 2. dfs 함수에서는 level 과 sum 을 받는다
 * 3. level 이 주어진 배열의 길이와 같으면
 *  3-1. sum 이 target 과 같으면
 *    3-1-1. answer 를 증가시킨다
 *  3-2. sum 이 target 과 다르면
 *    3-2-1. dfs 함수를 끝낸다
 * 4. level 을 1개 높이고, sum 에 다음 level 의 값을 더하고 dfs 함수를 호출한다
 * 5. level 을 1개 높이고, sum 에 다음 level 의 값을 빼고 dfs 함수를 호출한다
 * 7. answer 를 반환한다
 */

function solution(numbers, target) {
  let answer = 0;

  // dfs 함수 선언
  function dfs(level, sum) {
    // level 과 주어진 배열의 길이가 같으면
    if (level === numbers.length) {
      // 총 합과 타겟이 같으면
      if (sum === target) {
        // 정답 갯수 증가
        answer++;
      }

      // 총 합과 타겟이 다르면 dfs 함수를 끝낸다
      return;
    }

    // level 을 1개 높이고, 전체 합에서 다음 level 의 값을 더하고 dfs 함수를 호출
    dfs(level + 1, sum + numbers[level]);
    // level 을 1개 높이고, 전체 합에서 다음 level 의 값을 빼고 dfs 함수를 호출
    dfs(level + 1, sum - numbers[level]);
  }

  dfs(0, 0);

  return answer;
}
