function solution(k, dungeons) {
  let max = 0; // 최대 던전 수를 저장할 변수

  // 각 던전의 방문 여부를 저장하는 배열
  const visited = Array(dungeons.length).fill(false);

  // 깊이 우선 탐색(Depth First Search)을 수행하는 함수
  const dfs = (count, remainingFatigue) => {
    // 현재까지의 던전 수가 최대값보다 크면 최대값 업데이트
    max = max < count ? count : max;

    // 모든 던전에 대해 반복
    for (let i = 0; i < dungeons.length; i++) {
      // 이미 방문한 던전인 경우 건너뛰기
      if (visited[i]) {
        continue;
      }

      // 현재 고려 중인 던전
      let curDungeon = dungeons[i];

      // 현재 피로도로 해당 던전을 탐험할 수 있는지 확인
      if (curDungeon[0] <= remainingFatigue) {
        // 던전을 방문했다고 표시
        visited[i] = true;

        // 재귀 호출을 통해 다음 던전으로 이동하고 던전 수 증가 및 피로도 갱신
        dfs(count + 1, remainingFatigue - curDungeon[1]);

        // 던전을 방문 표시를 해제하여 다른 경우의 수를 고려할 수 있도록 함
        visited[i] = false;
      }
    }
  };

  // 초기값으로 0 던전에서 시작하여 최대 던전 수를 찾음
  dfs(0, k);

  // 최대 던전 수 반환
  return max;
}
