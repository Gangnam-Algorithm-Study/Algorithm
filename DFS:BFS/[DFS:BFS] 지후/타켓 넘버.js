function solution(numbers, target) {
    // 결과를 저장할 변수 초기화
    let result = 0;

    // DFS 함수 실행
    dfs(0, 0);

    // 깊이 우선 탐색을 수행하는 함수 정의
    function dfs(sum, index) {
        // 배열의 모든 원소를 다 검사했을 때
        if (numbers.length === index) {
            // 합이 타겟 숫자와 일치하면 결과를 1 증가시킴
            if (sum === target) result += 1;
            return;
        }

        // 현재 숫자를 더하거나 뺐을 때 모든 경우를 재귀적으로 검사
        dfs(sum + numbers[index], index + 1);
        dfs(sum - numbers[index], index + 1);
    }

    // 가능한 방법의 수를 반환
    return result;
}