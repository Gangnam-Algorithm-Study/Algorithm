function solution(phone_book) {
  // Set을 사용하여 중복된 전화번호를 제거한 전화번호부 생성
  const phoneBookSet = new Set(phone_book);

  // 각 전화번호에 대해 반복
  for (const phoneNumber of phone_book) {
    //  현재 전화번호를 다른 모든 전화번호와 비교
    for (let i = 1; i < phoneNumber.length; i++) {
      // 현재 전화번호의 앞부분을 자름
      const prefix = phoneNumber.slice(0, i);

      // 현재 전화번호의 접두어가 다른 전화번호에 존재하는지 확인
      if (phoneBookSet.has(prefix)) {
        // 접두어인 경우 false를 반환
        return false;
      }
    }
  }

  // 어떤 번호도 다른 번호의 접두어가 아닌 경우 true 반환
  return true;
}
