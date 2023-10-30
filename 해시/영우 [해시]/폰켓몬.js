/**
 * 아이디어
 * 1. nums의 길이를 2로 나눈 몫을 구한다.
 * 2. nums의 길이를 2로 나눈 몫이 nums에서 뽑을 수 있는 최대 갯수이다.
 * 3. nums에서 중복된 수를 제거한다.
 * 4. nums에서 중복된 수를 제거한 배열의 길이와 nums에서 뽑을 수 있는 최대 갯수를 비교한다.
 * 5. 둘 중 작은 값을 반환한다.
 */

function solution(nums) {
  const totalPick = Math.floor(nums.length / 2);
  const set = new Set(nums);
  const arraySet = [...set];
  const answer = Math.min(arraySet.length, totalPick);
  return answer;
}
