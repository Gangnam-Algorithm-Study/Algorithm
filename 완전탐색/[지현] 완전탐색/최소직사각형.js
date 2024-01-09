//sizes=[[60, 50], [30, 70], [60, 30], [80, 40]]
//result==4000
//카드의 크기를 담은 sizes 배열 받아서 모든 카드를 수용가능한 최소의 지갑 크기를 반환하라
function solution(sizes) {
    let answer = 0;
    let x = 0; //지갑의 작은 변
    let y = 0; //지갑의 큰 변
    for (s of sizes) {
        s.sort((a, b) => a - b); //오름차순으로 만들고 크기 비교
        if (s[0] > x) {
            x = s[0];
        }
        if (s[1] > y) {
            y = s[1];
        }
    }
    answer = x * y;
    return answer;
}
