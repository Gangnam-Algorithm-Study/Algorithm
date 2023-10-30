function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER; // 결과값을 저장할 변수, 초기값은 무한대
    let visited = Array.from({ length: n + 1 }, () => 0); // 방문 여부를 저장할 배열
    let count = 1; // 그룹 내 노드 개수를 저장할 변수
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 노드 간 연결 정보를 저장할 이차원 배열

    // 주어진 연결 정보를 그래프에 반영
    for (let [a, b] of wires) {
        graph[a][b] = 1;
        graph[b][a] = 1;
    }

    // 깊이 우선 탐색 (DFS) 함수 정의
    function DFS(L) {
        for (let i = 1; i <= n; i++) {
            if (visited[i] === 0 && graph[L][i] === 1) {
                visited[L] = 1;
                count++;
                DFS(i);
                visited[L] = 0;
            }
        }
    }

    for (let [a, b] of wires) {
        // 연결 정보를 제거하여 두 그룹으로 나누기
        graph[a][b] = 0;
        graph[b][a] = 0;
        count = 1; // 그룹 내 노드 개수 초기화
        DFS(1); // DFS 함수를 호출하여 그룹 내 노드 개수 계산

        // 연결 정보를 복원하고, 두 그룹의 노드 수 차이 계산
        graph[a][b] = 1;
        graph[b][a] = 1;
        answer = Math.min(answer, Math.abs(n - count - count)); // 결과값 업데이트
    }

    return answer; // 가장 작은 두 그룹의 노드 수 차이 반환
}