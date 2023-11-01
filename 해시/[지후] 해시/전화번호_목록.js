function solution(phone_book) {
    phone_book.sort();

    for (let i = 0; i <= phone_book.length; i++) {
        if (String(phone_book[i + 1]).search(phone_book[i]) === 0 && i + 1 <= phone_book.length) {
            return false
        }
    }

    return true;
}