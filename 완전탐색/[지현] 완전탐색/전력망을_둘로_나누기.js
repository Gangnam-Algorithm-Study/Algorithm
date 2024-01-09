//송전탑 수 2<= n <=100
//연결배열 wires
//전력망 네트워크는 반드시 하나의 트리형태
//하나의 연결을 끊어서 두 통신망의 송전탑 수가 최대한 비슷하도록 나누고싶을 때 각 통신망 송전탑 개수의 차이 return
/*
! 방법 : 
1.연결 하나씩 제외해서 그래프를 먼저 그린다.
2.그려진 그래프를 기반으로 dfs 돌면서 한 쪽의 연결만 구한다.
3.구한 연결을 기반으로 다른 한쪽 연결과의 차이를 구하고 그 중 최소값을 반환한다.
*/
//
function solution(n, wires) {
    let answer = -1;
    //wires 순회하며 하나씩 끊어보기
    let minDiff = n - 2;
    for (let i = 0; i < n - 1; i++) {
        //돌아가면서 연결 제외함
        let graph = {};
        for (let j = 0; j < n - 1; j++) {
            if (j != i) {
                let [left, right] = wires[j];
                if (!graph[left]) {
                    graph[left] = [];
                }
                if (!graph[right]) {
                    graph[right] = [];
                }
                graph[left].push(right);
                graph[right].push(left);
            }
        }
        let connection1Length = dfs(1, graph).length; //한쪽연결의 길이를 구한다-> 한쪽 연결 길이만 알면 두 연결의 차이는 구할 수 있기 때문
        let nowDiff = Math.abs(n - connection1Length * 2);
        minDiff = Math.min(minDiff, nowDiff);
    }

    //끊고 한쪽에 들어가도록 해서 끝나면 한 트리의 노드 개수 나옴-> 나머지 노드 개수도 구할 수 있음

    answer = minDiff;
    return answer;
}

function dfs(now, graph) {
    //dfs로 하나의 연결만 구해서 [...]형태로 반환하는 함수.
    visited = [now];
    queue = [now];
    if (!graph[now]) return [now]; //만약 현 노드가 아무 연결 없이 혼자라면 현재 연결된 트리인 [now] 반환
    while (queue.length > 0) {
        let curNode = queue.shift();

        for (node of graph[curNode]) {
            if (!visited.includes(node)) {
                visited.push(node);
                queue.push(node);
            }
        }
    }
    return visited;
}
