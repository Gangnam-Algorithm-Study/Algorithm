// k=현재 피로도, dungeons=[[최소 필요피로도, 소모 피로도],[,],[,] ...]
// 탐험할 수 있는 최대 던전 수를 return

/*
! 방법:
1. dfs로 던전을 도는 모든 경우의 수를 순회하는데,
2. dfs가 실행될 때 마다 방문여부, 피로도를 체크하면서 순회하고
3. 가장 많이 돈 던전의 수를 최신화 하도록 한다. 

*/
function solution(k, dungeons) {
    let answer = 0;
    //dfs로 전체 경우의 수 순회 -> visited=[] , dfs( stemina, counter)
    let visited = Array(dungeons.length).fill(false); //방문여부 기록할 배열
    let maxCounter = 0;

    function dfs(stemina, counter) {
        for (let i = 0; i < dungeons.length; i++) {
            // if(!visited[i]&& stemina>=dungeons[i][0] &&stemina-dungeons[i][1]>=0){  //-> 생각해보니 마지막 조건 필요없음 - 조건에 최소필요 피로도>=소모필요도 라고 제시했기 때문
            if (!visited[i] && stemina >= dungeons[i][0]) {
                //방문한적 없고 && 최소필요 스테미나 충족  한다면 들어간다. && 던전 돌기에 충분한 스테미나면

                visited[i] = true;
                dfs(stemina - dungeons[i][1], counter + 1);
                visited[i] = false;
            }
        }
        return (maxCounter = Math.max(maxCounter, counter)); //그냥 마지막에 return 문으로 maxCounter 최대로 유지만 하면서 순회하면 됨
    }
    dfs(k, 0);
    answer = maxCounter;
    return answer;
}
