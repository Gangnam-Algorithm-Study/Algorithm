function solution(numbers) {
    let sortArr = numbers.map(item => String(item))
        .sort((a, b) => (b + a) - (a + b))
        .join('');

    return sortArr[0] === '0' ? '0' : sortArr
}