function solution(maps) {
    let result = -1;

    // 2차원 배열의 길이
    const n = maps.length;

    // 내부 배열의 길이
    const m = maps[0].length;

    // 방문 여부를 저장하는 배열 false
    let visitedArr = Array.from(Array(n), () => Array(m).fill(false));

    // 이미 한칸은 차지하고 있는 상태이기에 초기화
    let queue = [[0, 0, 1]];

    // queue index
    let queueIdx = 0;

    // 좌우 이동 [왼,중,우,중]
    const moveX = [-1, 0, 1, 0];

    // 상하 이동 [중,상,중,하]
    const moveY = [0, 1, 0, -1];

    // queue가 비어있을 때 까지 loop
    while (queue.length > queueIdx) {

        // 현재 위치
        const now = queue[queueIdx];

        queueIdx += 1;

        // 만약 꺼낸 값이 정답 (도착지) 이면
        if (now[0] == n - 1 && now[1] == m - 1) {
            // 결과값을 이동 횟수로 업데이트
            result = now[2];
            break;
        }

        // 현재 위치가 방문하지 않았던 위치일 시
        if (!visitedArr[now[0]][now[1]]) {
            // 방문 함수 호출 
            visit(now[0], now[1], now[2]);
        }
    }

    function visit(x, y, count) {
        // 현재 위치를 방문했음을 명시
        visitedArr[x][y] = true;

        // 네 방향으로 이동을 시도
        for (let i = 0; i < moveX.length; i++) {
            const movedX = x + moveX[i];
            const movedY = y + moveY[i];

            // 이동한 위치가 유효하고, 아직 방문하지 않았으며, 벽이 아닌 경우
            if (movedX >= 0 && movedX < n && movedY >= 0 && movedY < m && !visitedArr[movedX][movedY] && maps[movedX][movedY] === 1) {
                queue.push([x + moveX[i], y + moveY[i], count + 1]); // 큐에 이동한 위치와 이동 횟수를 추가
            }
        }
    }

    return result;
}


solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);