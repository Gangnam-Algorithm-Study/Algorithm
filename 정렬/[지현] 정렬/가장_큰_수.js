// numbers 내부의 정수들을 이어붙여 만들 수 있는 최대값 반환
// numbers 내부 정수<=1000

// 결국 정수 중 최대가 1000이기 때문에 전부 네자리 수로 바꿔서 크기 비교한다는 것이 핵심 아이디어
// ex) 9 =>9999 ,13=> 1313 , 783=> 7837
function solution(numbers) {
    var answer = "";
    let arr = []; //4자리로 바꿔서 임시 저장할 array
    for (let i = 0; i < numbers.length; i++) {
        let tmp = String(numbers[i]).repeat(4).slice(0, 4);
        arr.push([tmp, i]);
    }
    // console.log(arr)
    arr.sort((a, b) => Number(b[0]) - Number(a[0]));
    // console.log(arr)
    for (j of arr) {
        answer += numbers[j[1]];
    }
    return Number(answer) == 0 ? "0" : answer; // '0000'=>'0'으로 나와야 하기에 예외처리
}
