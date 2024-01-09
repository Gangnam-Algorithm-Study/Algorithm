//progresses:일의 진행률arr =[93, 30, 55]
//speeds : 일의 하루 진행속도arr =	[1, 30, 5]
//매일의 배포마다 몇개의 기능이 배포되는지 배열로 반환
function solution(progresses, speeds) {
    let answer = [];
    let tmp = [...progresses];
    let dayCal = [];
    for (let i = 0; i < tmp.length; i++) {
        let howMuchDays = Math.ceil((100 - tmp[i]) / speeds[i]);
        dayCal.push(howMuchDays);
    }
    console.log(dayCal); //기능 개선 완료까지 걸리는 날 기록한 arr

    let pointer = 0; //dayCal의 배포까지 기준일을 가리킬 포인터
    dayCal.forEach((el, idx) => {
        if (idx == dayCal.length - 1) {
            //idx가 마지막이라면
            if (el > dayCal[pointer]) {
                //마지막 값이 기준일보다 높다면
                answer.push(idx - pointer); //이전일까지 공정 배포 기록하고
                pointer = idx; //pointer를 현재idx 까지 초기화 할 것임
            }
            answer.push(idx - pointer + 1); //마지막날 포함해서 배포기록
        } else if (el > dayCal[pointer]) {
            //기준일보다 오래걸리면?
            answer.push(idx - pointer);
            pointer = idx;
        }
    });
    return answer;
}
