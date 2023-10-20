function solution(sizes) {
    // 배열을 순회하며 길이보다 높이가 클 시 배열 위치 변경
    sizes.forEach(size => {
        if (size[0] < size[1]) {
            size = size.reverse();
        }
    });

    // 길이와 높이를 담을 변수 선언
    let width = sizes[0][0];
    let height = sizes[0][1];

    // 배열을 순회하며 최대값 추출
    for (let i = 0; i <= sizes.length - 1; i++) {
        if (sizes[i][0] > width) {
            width = sizes[i][0];
        }

        if (sizes[i][1] > height) {
            height = sizes[i][1];
        }
    }

    // 제일 큰 값들을 곱해 최종값 리턴
    return width * height;
}