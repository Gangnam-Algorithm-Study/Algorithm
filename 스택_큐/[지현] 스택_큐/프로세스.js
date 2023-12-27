function solution(priorities, location) {
    let answer = 0;
    //priorities.length<=100이기에 시간복잡도 비교적 자유로움
    //중요도,인덱스를 함께 정리하기 위해 => queue=[[el,idx],[]...] 형태로 전부 정리
    let queue = [];
    priorities.forEach((el, idx) => {
        queue.push([el, idx]);
    });

    let sortedArr = priorities.sort((a, b) => b - a); //중요도 배열을 내림차순 sort하고 maxIdx로 최대값을 추적함
    let maxIdx = 0;
    let done = []; //완료된 프로세스 모을 Array
    while (queue.length > 0) {
        let front = queue.shift();
        if (front[0] == sortedArr[maxIdx]) {
            //queue의 맨 앞 값이 최대 값과 같으면
            done.push(front);
            if (front[1] == location) {
                break;
            }
            maxIdx++;
        } else {
            queue.push(front);
        }
    }
    answer = done.length;
    return answer;
}
