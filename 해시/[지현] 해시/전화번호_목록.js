//번호 array phone_book에서 어떤 번호가 다른 번호의 접두어인지 확인 접두어면 f, 아니면 t
function solution(phone_book) {
    let answer = true;
    phone_book.sort(); //초기 정렬
    for (let i = 0; i < phone_book.length - 1; i++) {
        //현 번호가 다음 번호의 접두어인지 여부 조사하며 순회
        if (phone_book[i] == phone_book[i + 1].slice(0, phone_book[i].length)) {
            answer = false; //접두어라면 false 처리후 반복문 break
            break;
        }
    }
    return answer;
}
