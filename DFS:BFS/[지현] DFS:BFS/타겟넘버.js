function solution(numbers, target) {
    var answer = 0;
    //재귀를 만들어서 index와, sum을 함께 넘기고 인덱스가 끝까지 다다르면 sum과 target 값 비교후 answer+

    const recursion = (index, sum) => {
        if (index == numbers.length) {
            //인덱스가 끝까지 갔을때
            if (sum == target) {
                //타겟 과 값 비교 후 answer 개수 최신화
                answer += 1;
            }
            return;
        }
        recursion(index + 1, sum + numbers[index]); //인덱스가 끝까지 가는 상황 외에는, 항상 값을 +-한 양 갈래로 재귀
        recursion(index + 1, sum - numbers[index]);
    };
    recursion(0, 0);
    return answer;
}
