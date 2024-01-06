//학생1,2,3 3인이 답안을 같은 패턴으로 찍는다고 할 때
//정답지 answers를 받아서 1등의 번호를 배열로 반환하라
function solution(answers) {
    let result = [];
    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        //답지 순회하며 1,2,3번 학생이 정답인지 확인하고 count 배열에 기록한다.
        if (answers[i] === a[i % 5]) {
            count[0]++;
        }
        if (answers[i] === b[i % 8]) {
            count[1]++;
        }
        if (answers[i] === c[i % 10]) {
            count[2]++;
        }
    }

    let maxcount = Math.max(...count); //1등의 점수를 구하고 누가 1등인지 구한다.

    count.forEach((el, idx) => {
        if (el == maxcount) {
            result.push(idx + 1);
        }
    });
    return result;
}
