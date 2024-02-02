function solution(tickets) {
  const answer = [];
  const visited = []; // 방문 여부를 저장하는 배열

  // 경로가 알파벳 순서로 가장 빠른 순서로 정렬
  tickets.sort();

  const dfs = (route, usedTickets) => {
    // 모든 티켓을 사용한 경우 결과에 추가
    if (route.length === tickets.length + 1) {
      answer.push([...route]);
      return;
    }

    // 가능한 티켓들을 탐색
    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === usedTickets) {
        visited[i] = true;
        dfs([...route, tickets[i][1]], tickets[i][1]);
        visited[i] = false;
      }
    }
  };

  // 출발지가 ICN인 경우에서 출발
  dfs(["ICN"], "ICN");

  return answer[0]; // 알파벳 순서로 가장 빠른 경로 반환
}
