function solution(n, wires) {
  // 각 노드들 간의 연결 정보를 저장하는 객체
  const links = {};

  // 주어진 wires 배열을 순회하면서 각 노드들 간의 연결 정보를 links 객체에 저장
  wires.map((w) => {
    // 풀이과정 1
    const [a, b] = w;
    // 만약 a나 b가 links 객체에 없다면 빈 배열로 초기화
    if (!links[a]) links[a] = [];
    if (!links[b]) links[b] = [];
    // 양방향 연결이므로 a에서 b로의 연결과 b에서 a로의 연결을 모두 추가
    links[a].push(b);
    links[b].push(a);
  });

  // 특정 노드를 기준으로 탐색하여 해당 노드를 제외한 나머지 노드의 개수를 반환하는 함수
  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;

    while (queue.length) {
      const cur = queue.pop();

      // 현재 노드와 연결된 노드들을 순회하면서 방문하지 않은 노드를 큐에 추가
      links[cur].map((next) => {
        // 예외 노드가 아니고 방문하지 않은 경우에만 큐에 추가
        if (next !== exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });

      count++;
    }
    return count;
  };

  let answer = 100; // 초기값 설정
  wires.map((w, i) => {
    // 풀이과정 2
    const [a, b] = w;

    // 두 노드 간의 연결을 제거한 후, 두 부분 그래프의 노드 수 차이 계산
    const dif = Math.abs(searchTree(a, b) - searchTree(b, a));

    // 최솟값 갱신
    answer = answer > dif ? dif : answer;
  });

  return answer;
}
