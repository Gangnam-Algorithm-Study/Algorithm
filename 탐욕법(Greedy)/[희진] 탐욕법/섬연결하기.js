function solution(n, costs) {
  // 각 섬마다 연결된 다른 섬과의 최소 비용을 저장하는 배열
  const minCosts = new Array(n).fill(Infinity);
  // 방문한 섬 여부를 저장하는 배열
  const visited = new Array(n).fill(false);

  // 임의의 섬을 시작으로 설정
  minCosts[0] = 0;

  let minCost = 0;

  // 모든 섬을 방문할 때까지 반복
  for (let i = 0; i < n; i++) {
    // 방문하지 않은 섬 중 최소 비용을 갖는 섬을 찾음
    let minCostIsland = -1;
    for (let j = 0; j < n; j++) {
      if (
        !visited[j] &&
        (minCostIsland === -1 || minCosts[j] < minCosts[minCostIsland])
      ) {
        minCostIsland = j;
      }
    }

    // 최소 비용 섬을 방문 처리하고 비용을 더함
    visited[minCostIsland] = true;
    minCost += minCosts[minCostIsland];

    // 최소 비용 섬과 연결된 다른 섬들의 비용을 업데이트
    for (const [start, end, cost] of costs) {
      if (start === minCostIsland && !visited[end] && cost < minCosts[end]) {
        // 최소 비용 섬과 연결된 다른 섬으로 가는 비용이 더 작으면 업데이트
        minCosts[end] = cost;
      }
      if (end === minCostIsland && !visited[start] && cost < minCosts[start]) {
        // 최소 비용 섬과 연결된 다른 섬으로 가는 비용이 더 작으면 업데이트
        minCosts[start] = cost;
      }
    }
  }

  return minCost;
}
