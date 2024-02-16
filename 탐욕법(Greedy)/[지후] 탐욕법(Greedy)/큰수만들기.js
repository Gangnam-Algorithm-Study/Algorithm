function solution(number, k) {
    let result = [];

    for (let num of number) {
        while (k > 0 && result[result.length - 1] < num) {
            result.pop(num);
            k -= 1;
        }
        result.push(num);
    }

    return result.join('').slice(0, number.length - k);
}