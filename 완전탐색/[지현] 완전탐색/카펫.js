//brown은 카펫의 테두리에 둘러져 있고, 내부는 전부 yellow로 칠해져 있음
//brown, yellow 격자의 수를 받아서 카펫의 [가로,세로] 길이를 반환 -> 단, 가로>=세로
function solution(brown, yellow) {
    let answer = [];
    let brownPair = (brown + 4) / 2; //브라운 수로 카펫의 가로+세로길이 구하기

    for (let i = 1; i <= yellow; i++) {
        if (yellow === 1) {
            answer = [3, 3];
            break;
        } else if (yellow % i === 0) {
            //나눴을 때 나머지 0이면-
            let yellowPair = i + yellow / i; //노란부분 가로+세로길이

            if (yellowPair + 4 === brownPair) {
                answer = [yellow / i + 2, i + 2];
                // answer.sort((a,b)=>b-a) //필요없음-> 어차피 1부터 순서대로 순회하기 때문에 yellow/i+2> i+2
                break;
            }
        }
    }
    return answer;
}
