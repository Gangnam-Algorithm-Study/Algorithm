function solution(sizes) {
  // 가로, 세로 최솟값을 선언
  let wMax = 0;
  let hMax = 0;

  // 받은 2차열 배열을 순회
  sizes.forEach((size, i) => {
    // 가로, 세로값 지정
    const w = size[0];
    const h = size[1];

    // 가로가 세로보다 크거나 같으면 가로, 세로 최댓값을 그대로 지정한다
    if (w >= h) {
      if (wMax < w) {
        wMax = w;
      }

      if (hMax < h) {
        hMax = h;
      }
      // 세로가 가로보다 크면 가로, 세로 최댓값을 서로 바꿔준다
    } else {
      if (wMax < size[1]) {
        wMax = size[1];
      }

      if (hMax < size[0]) {
        hMax = size[0];
      }
    }
  });

  return wMax * hMax;
}
