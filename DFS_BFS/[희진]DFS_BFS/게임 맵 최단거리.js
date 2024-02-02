function solution(maps) {
  const n = maps.length; // 행의 개수
  const m = maps[0].length; // 열의 개수

  // 이동 방향 (동, 서, 남, 북)
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // 방문 여부를 저장하는 배열
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // BFS를 위한 큐 초기화
  const queue = [];
  queue.push({ x: 0, y: 0, distance: 1 }); // 시작 지점 추가
  visited[0][0] = true; // 시작 지점 방문 표시

  while (queue.length > 0) {
    const { x, y, distance } = queue.shift();

    // 4방향으로 이동
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 이동 가능한 범위인지 확인
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        // 상대 팀 진영에 도착한 경우
        if (nx === n - 1 && ny === m - 1) {
          return distance + 1; // 도착한 칸도 포함하여 반환
        }

        // 다음 칸을 큐에 추가
        queue.push({ x: nx, y: ny, distance: distance + 1 });
        visited[nx][ny] = true; // 방문 표시
      }
    }
  }

  // BFS를 마치고도 도착하지 못한 경우
  return -1;
}
