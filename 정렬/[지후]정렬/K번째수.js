function solution(array, commands) {
    let result = commands.map(([i, j, k]) => {
        return array.slice(i - 1, j).sort((a, b) => { return a - b })[k - 1];
    })

    return result;
}