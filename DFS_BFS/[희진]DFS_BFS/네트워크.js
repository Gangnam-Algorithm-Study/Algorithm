function solution(n, computers) {
  // 방문 여부를 저장하는 배열
  const visited = [];
  // 네트워크 개수를 저장하는 변수
  let answer = 0;

  // 깊이 우선 탐색 함수
  const dfs = (node) => {
    // 현재 노드를 방문 표시
    visited[node] = true;

    // 현재 노드와 연결된 다른 노드들에 대해 재귀적으로 방문
    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  // 모든 노드에 대해 반복
  for (let i = 0; i < n; i++) {
    // 방문하지 않은 노드일 경우에만 DFS 수행하고 네트워크 개수 증가
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
