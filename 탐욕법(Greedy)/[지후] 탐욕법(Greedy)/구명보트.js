function solution(people, limit) {
    let result = 0;
    let sumNum = 0;
    people.sort((a, b) => b - a);

    people.forEach(n => {
        if (n + people.at(-1) > limit) {
            result++;
        } else {
            people.pop();
            result++;
        }
    })

    return result;
}