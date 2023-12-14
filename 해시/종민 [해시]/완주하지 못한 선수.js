// 벨로그 링크 : https://velog.io/@re_go/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B3%A0%EB%93%9D%EC%A0%90-Kit-%ED%95%B4%EC%8B%9CLevel-1-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%84%A4%EB%AA%85-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4

function solution(participant, completion) {
  let answer = '';

  participant.sort();
  completion.sort();
  // 우선 참가자 명단과 완주자 명단을 sort 메서드로 오름차순 정렬 합니다. 

  for(let i = 0; i < participant.length; i++) {
  // 그 다음 참가자 명단의 길이만큼 for문을 돌리면서
      if(participant[i] !== completion[i]){
  // 원래는 indexOf를 사용하려고 했는데 실패하는 테스트케이스들이 존재하여 그냥 정렬된 배열들 안의 값 자체들을 놓고 비교하는 방식으로 사용했습니다. 매커니즘은 같은 배열의 위치 상에 참가자 배열에는 존재하는 사람이 완주자 명단에는 없거나 다른 사람일때 완주하지 못한 사람을 answer로 할당하여 반환합니다.
          answer = participant[i];
  // 그 참가자의 정보(값)을 answer에 할당하고
          break;
  // for문 종료.
      }
  }
  return answer;
}
  
