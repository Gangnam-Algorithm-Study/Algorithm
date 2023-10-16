function solution(priorities, location) {
    let results = 0;

    priorities.forEach((numItem, index) => {
        priorities[index] = { num: numItem, index }
    })

    while (priorities.length) {
        const queue = priorities.shift();

        if (priorities.some(item => item.num > queue.num)) {
            priorities.push(queue);
        } else {
            results++
            if (queue.index === location) break;
        }
    }

    return results;
}