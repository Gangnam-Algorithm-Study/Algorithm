function solution(brown, yellow) {
  const totalGrids = brown + yellow; // 전체 격자의 개수

  // 가로 길이와 세로 길이를 모두 고려해야 하므로 i는 1부터 totalGrids까지 반복
  for (let i = 1; i <= totalGrids; i++) {
    if (totalGrids % i === 0) {
      // totalGrids를 i로 나누어 떨어질 때, 가로 길이가 될 수 있는 후보 i
      const j = totalGrids / i; // 세로 길이는 가로 길이로부터 구할 수 있음

      // 노란색 격자의 개수는 (i-2) * (j-2)와 같아야 함
      if ((i - 2) * (j - 2) === yellow) {
        return [Math.max(i, j), Math.min(i, j)]; // 큰 값이 가로 길이, 작은 값이 세로 길이
      }
    }
  }
}