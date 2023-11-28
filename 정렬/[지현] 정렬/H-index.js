function solution(citations) {
    //h번 이상 인용된 논문이 h편 이상이고 나머지논문이 h번 이하
    var answer = 0;

    citations.sort((a, b) => b - a); //내림차순하고
    //citations값 순회하는데 내림차순이기에 이전 값은 모두 현재 값보다 크다.
    //따라서 Math.min(현재 값, 현재까지 논문 수) 가 지금까지의 최대 h이다.
    for (let i = 0; i < citations.length; i++) {
        let caseMaxH = Math.min(citations[i], i + 1);
        answer = answer < caseMaxH ? caseMaxH : answer;
    }
    return answer;
}
