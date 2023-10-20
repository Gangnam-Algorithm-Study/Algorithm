function solution(participant, completion) {
    // 시간 복잡도 문제
    // for문으로 변경
    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();

    for (let i = 0; i <= sortParticipant.length; i++) {
        if (sortParticipant[i] !== sortCompletion[i]) {
            return sortParticipant[i];
        }
    }
}