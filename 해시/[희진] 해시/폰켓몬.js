function solution(nums) {
  // 최대 폰켓몬 개수
  const maxCount = nums.length / 2;

  // 중복 제거한 폰켓몬 종류 배열
  const poketArr = [...new Set(nums)];

  // 중복을 제거한 폰켓몬 종류의 개수와 N/2 중 작은 값을 선택
  // 만약 중복을 제거한 종류의 개수가 최대 개수보다 크다면 최대 개수를 반환하고,
  // 그렇지 않다면 중복을 제거한 종류의 개수를 반환
  return poketArr.length > maxCount ? maxCount : poketArr.length;
}
