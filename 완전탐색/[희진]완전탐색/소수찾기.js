const isPrime = (num) => {
  if (num < 2) return false; // 2 미만의 수는 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // 2부터 제곱근까지의 수 중 나누어 떨어지는 경우 소수가 아님
  }
  return true; // 나누어 떨어지는 수가 없으면 소수임
};

// 주어진 숫자로 만들 수 있는 소수의 개수를 구하는 함수
function solution(numbers) {
  const nums = numbers.split(""); // 문자열을 배열로 분리
  const visited = new Array(nums.length).fill(false); // 방문 여부를 저장하는 배열 초기화
  const result = new Set(); // 중복을 허용하지 않는 Set을 사용하여 소수 저장

  // 순열을 생성하는 함수
  const generatePermutations = (curr) => {
    if (curr.length > 0) {
      const num = parseInt(curr.join("")); // 배열을 숫자로 변환
      if (isPrime(num)) {
        result.add(num); // 현재 순열로 만들어진 수가 소수면 Set에 추가
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true; // 현재 숫자를 사용 중으로 표시
        generatePermutations([...curr, nums[i]]); // 다음 숫자를 포함한 순열 생성
        visited[i] = false; // 순열 생성이 끝나면 사용 중 표시를 해제
      }
    }
  };

  generatePermutations([]); // 순열 생성 시작

  return result.size; // Set에 저장된 소수의 개수 반환
}
