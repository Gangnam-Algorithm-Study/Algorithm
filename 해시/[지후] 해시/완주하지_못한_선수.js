// function solution(participant, completion) {
//     // 시간 복잡도 문제
//     // for문으로 변경
//     const sortParticipant = participant.sort();
//     const sortCompletion = completion.sort();

//     for (let i = 0; i <= sortParticipant.length; i++) {
//         if (sortParticipant[i] !== sortCompletion[i]) {
//             return sortParticipant[i];
//         }
//     }
// }


// 두번째 방식
// Map을 사용한 방식으로 변경
function solution(participant, completion) {
    const participantMap = new Map();

    participant.forEach((value) => {
        if (participantMap.has(value)) {
            participantMap.set(`${value}`, participantMap.get(`${value}`) + 1);
        } else {
            participantMap.set(value, 1);
        }
    });

    completion.forEach((value) => {
        participantMap.set(`${value}`, participantMap.get(`${value}`) - 1);
        if (participantMap.get(`${value}`) === 0) {
            participantMap.delete(`${value}`);
        }
    });

    return Array.from(participantMap)[0][0];
}