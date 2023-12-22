function solution(arr) {
  // 현재 num이 다음 원소(arr[index + 1])와 다를 경우에만 참
  // 따라서 연속적으로 나타나는 숫자는 하나만 남게 됨
  return arr.filter((num, index) => num !== arr[index + 1]);
}
