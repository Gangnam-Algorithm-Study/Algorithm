function solution(tickets) {
    // tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]
    const graph = {};
    for (const [a, b] of tickets) {
        if (!graph[a]) {
            graph[a] = [];
        }
        graph[a].push(b);
    }
    // graph = { ICN: [ 'SFO', 'ATL' ], SFO: [ 'ATL' ], ATL: [ 'ICN', 'SFO' ] } 

    for (const key in graph) {
        // 알파벳 순으로 정렬
        graph[key].sort((a, b) => a > b ? -1 : 1);
    }
    // graph = { ICN: [ 'SFO', 'ATL' ], SFO: [ 'ATL' ], ATL: [ 'SFO', 'ICN' ] }

    const stack = ['ICN'];
    const result = [];

    while (stack.length > 0) {
        const target = stack[stack.length - 1];
        console.log(graph[target], target);
        if (graph[target] && graph[target].length > 0) {
            // graph의 값을 지워주며 지워진 해당 값을 stack에 추가
            stack.push(graph[target].pop());
        } else {
            // 다음 경로로 방문할 수 없을 때
            result.push(stack.pop());
        }
    }

    // while문 내부에 있는 과정에서 값이 거꾸로 들어가있기때문에 reverse
    return result.reverse();
}