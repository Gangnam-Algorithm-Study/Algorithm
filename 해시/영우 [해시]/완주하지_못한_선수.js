/**
 * 아이디어
 * 1. 참가자와 완주자를 비교하여 참가자에만 있는 이름을 찾는다.
 * 2. 참가자를 순회하며 객체에 이름이 있으면 카운트를 1 증가시킨다 (없으면 1로 초기화)
 * 3. 완주자를 순회하며 객체에 이름이 있으면 카운트를 1 감소시킨다
 * 4. 객체를 순회하며 카운트가 1 이상인 이름을 찾는다
 */

/**
 * 생각해볼점
 * Map 으로 풀면 더 빠를까?
 */

function solution(participant, completion) {
  let object = {};

  participant.forEach((entry) => {
    object[entry] = object[entry] ? object[entry] + 1 : 1;
  });

  completion.forEach((entry) => {
    object[entry] = object[entry] - 1;
  });

  for (let key in object) {
    if (object[key] >= 1) {
      return key;
    }
  }
}
