function solution(word) {
  let charArr = ["A", "E", "I", "O", "U"];
  let t = [];
  var answer = 0;

  // 깊이 우선 탐색 (DFS)을 통해 길이가 5 이하인 단어를 생성하여 배열에 저장
  const dfs = (cha) => {
    if (cha.length > 5) {
      return;
    }
    t.push(cha); // 현재 단어를 배열에 추가

    // 각 알파벳으로 분기하여 다음 단계의 DFS 호출
    for (let i = 0; i < 5; i++) {
      dfs(cha + charArr[i]);
    }
  };

  // 각 알파벳으로 시작하는 단어를 생성하기 위해 DFS 호출
  for (let a of charArr) {
    dfs(a);
  }

  // 생성된 단어들을 내림차순으로 정렬
  t.sort((a, b) => b - a);

  // 주어진 단어가 정렬된 배열에서 몇 번째 위치하는지 계산
  answer = 1 + t.indexOf(word);

  return answer;
}
