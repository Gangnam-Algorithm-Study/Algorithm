function solution(name) {
  let answer = 0; // 총 조이스틱 조작 횟수를 저장하는 변수
  let min = name.length - 1; // 커서를 이동시키는 최소 횟수를 저장하는 변수

  for (let i = 0; i < name.length; i++) {
    let plus = name.charCodeAt(i); // 현재 문자의 아스키 코드 값을 구함
    // 위 아래 조작 횟수를 계산
    if (plus < 78) {
      answer += plus % 65; // 현재 문자보다 작은 알파벳의 개수를 더함
    } else {
      answer += 91 - plus; // 현재 문자보다 큰 알파벳의 개수를 더함
    }

    // 좌 우 이동 횟수를 계산
    let nextIndex = i + 1;
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1; // 다음 문자가 A일 경우 다음 문자로 넘어감
    }

    // 현재 위치에서 왼쪽으로 이동하는 횟수, 오른쪽으로 이동하는 횟수 중 작은 값 갱신
    min = Math.min(
      min,
      i * 2 + name.length - nextIndex,
      i + 2 * (name.length - nextIndex)
    );
  }

  answer += min; // 총 조이스틱 조작 횟수에 최소 이동 횟수를 더함

  return answer; // 최종 결과 반환
}
