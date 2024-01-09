function solution(sizes) {
  // 최대 가로 길이 및 최대 세로 길이를 초기화
  let maxHorizontal = 0;
  let maxVertical = 0;

  // 각 크기에 대해서 반복문
  for (const size of sizes) {
    // 현재 크기의 가로와 세로를 각각 width, height에 할당
    const [width, height] = size;

    // 최대 가로 길이를 갱신
    // 현재 크기의 가로와 세로 중에서 더 큰 값으로 업데이트
    maxHorizontal = Math.max(maxHorizontal, Math.max(width, height));

    // 최대 세로 길이를 갱신
    // 현재 크기의 가로와 세로 중에서 더 작은 값으로 업데이트
    maxVertical = Math.max(maxVertical, Math.min(width, height));
  }

  // 최종적으로 구한 최대 가로 길이와 최대 세로 길이를 곱하여 결과 반환
  return maxHorizontal * maxVertical;
}
