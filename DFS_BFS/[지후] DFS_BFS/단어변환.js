function solution(begin, target, words) {
    // target이 words 안에 없을 시 0 return
    if (!words.includes(target)) {
        return 0
    }

    const visited = { [begin]: 0 };
    const queue = [begin];

    // BFS
    while (queue.length) {
        const current = queue.shift();

        // queue 에서 지운 값이 target과 일치한 경우 종료
        if (current === target) break;

        words.forEach(value => {
            if (checking(value, current) && !visited[value]) {
                visited[value] = visited[current] + 1;
                queue.push(value);
            }
        })
    }

    const result = visited[target] ?? 0;

    return result;
}

const checking = (str1, str2) => {
    let count = 0;
    const len = str1.length;

    for (let i = 0; i < len; i++) {
        if (str1[i] !== str2[i]) count++;
    }


    // 서로 다른 철자가 딱 1개면 true
    return count === 1 ? true : false;
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);