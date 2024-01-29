function solution(n, computers) {
    let result = 0;
    const visited = [];

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, visited, computers);
            result++;
        }
    }

    return result;
}

// node = 현재 loop를 돌고 있는 target
// visited = 방문을 체크 할 Array
// computers = 인자로 넘어온 원본 네트워크 연결 리스트
const dfs = (node, visited, computers) => {
    // 0 과 1로 방문을 했는지 구분
    visited[node] = 1;

    for (let i = 0; i < computers.length; i++) {
        console.log(computers[node][i]);

        // 네트워크가 연결이 되어있거나 방문하지 않았을 경우 dfs 함수 실행
        if (computers[node][i] === 1 && !visited[i]) {
            dfs(i, visited, computers);
        }
    }
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])