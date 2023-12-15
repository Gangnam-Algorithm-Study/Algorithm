function solution(participant, completion) {
  // 참가자 이름과 등장 횟수를 기록하는 Map을 생성
  const participantMap = new Map();

  // 참가자 목록 점검
  for (let i = 0; i < participant.length; i++) {
    const name = participant[i];

    // 만약 이미 Map에 이름이 존재한다면 등장 횟수를 1 증가
    // 존재하지 않는다면 새로운 이름을 Map에 추가하고 등장 횟수를 1로 설정
    if (participantMap.has(name)) {
      participantMap.set(name, participantMap.get(name) + 1);
    } else {
      participantMap.set(name, 1);
    }
  }

  // 완주자 목록 점검
  for (let i = 0; i < completion.length; i++) {
    const name = completion[i];

    // Map에서 완주한 참가자를 찾아 등장 횟수를 1 감소
    participantMap.set(name, participantMap.get(name) - 1);

    // 만약 등장 횟수가 0이 되면 Map에서 해당 이름을 제거
    if (participantMap.get(name) === 0) {
      participantMap.delete(name);
    }
  }

  // Map을 순회하면서 등장 횟수가 0이 아닌 선수를 찾아 반환
  // 이 부분 좀 더 간결하게 하는 방법 있을까요
  for (const [name, count] of participantMap) {
    if (count !== 0) {
      return name;
    }
  }
}
