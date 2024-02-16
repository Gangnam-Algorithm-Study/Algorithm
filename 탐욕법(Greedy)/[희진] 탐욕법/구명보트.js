function solution(people, limit) {
  people.sort((a, b) => b - a); // 무게가 많은 순서대로 정렬

  let left = 0; // 가장 가벼운 사람을 가리키는 인덱스
  let right = people.length - 1; // 가장 무거운 사람을 가리키는 인덱스
  let count = 0; // 구명보트 개수

  while (left <= right) {
    // 가장 가벼운 사람과 가장 무거운 사람을 함께 태웠을 때 무게가 limit을 초과하지 않으면 두 사람 모두 구명보트에 태우고 인덱스를 이동
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      // 가장 무거운 사람만 태웠을 때 무게가 limit을 초과하면 가장 무거운 사람만 태우고 인덱스 이동
      left++;
    }
    count++; // 구명보트 개수 증가
  }

  return count;
}
