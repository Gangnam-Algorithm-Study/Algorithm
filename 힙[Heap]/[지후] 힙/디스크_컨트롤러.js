function solution(jobs) {
    let index = 0;
    let now = 0;
    let sum = 0;

    jobs.sort((a, b) => a[0] - b[0]);

    const waiting = [];

    while (index < jobs.length || waiting.length > 0) {
        if (index < jobs.length && now >= jobs[index][0]) {
            waiting.push(jobs[index]);
            index += 1;

            waiting.sort((a, b) => a[1] - b[1]);
            continue;
        }
        if (!waiting.length) {
            now = jobs[index][0];
        } else {
            const first = waiting.shift();
            sum += now - first[0] + first[1];

            now += first[1];
        }
    }

    return Math.floor(sum / jobs.length);
}
