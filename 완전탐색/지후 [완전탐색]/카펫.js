function solution(brown, yellow) {

    // brown 이나 yellow가 없을 때 빈 배열 return
    if (!brown || !yellow) return [];

    // 정사각형의 가로 길이를 i로 반복하며 검사
    for (let i = 3; i <= (brown + yellow) / i; i++) {
        // 정사각형의 가로 길이 i에 따른 세로 길이 계산
        let width = Math.floor((brown + yellow) / i);

        // 주어진 노란색 타일의 개수와 비교하여 조건을 만족하는지 확인
        if ((width - 2) * (i - 2) === yellow) {
            // 조건을 만족하는 경우 가로와 세로 길이를 반환
            return [width, i];
        }
    }
}
