function solution(phone_book) {
  // 전화번호를 순서대로 정렬한다
  // js 의 sort 는 유니코드 순서를 따르기 때문에, 앞글자부터 비교가 가능하다
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    const phone1 = String(phone_book[i]);
    const phone2 = String(phone_book[i + 1]);

    // 뒤의 값이 앞의 값으로 시작하면 false 를 반환한다
    if (phone2.startsWith(phone1)) {
      return false;
    }
  }

  // 전부 통과하면 true 를 반환한다
  return true;
}
