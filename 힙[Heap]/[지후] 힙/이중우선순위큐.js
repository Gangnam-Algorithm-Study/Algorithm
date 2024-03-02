function solution(operations) {
    let result = [];
    operations.forEach(v => {
        const [operation, num] = v.split(' ');

        if (operation === 'I')
            result.push(parseInt(num));
        if (operation === 'D') {
            if (num == 1) result.splice(result.indexOf(Math.max(...result)), 1);
            if (num == -1) result.splice(result.indexOf(Math.min(...result)), 1);
        }
    })
    return [Math.max(...result) | 0, Math.min(...result) | 0];
}