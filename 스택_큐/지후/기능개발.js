function solution(progresses, speeds) {
    let days = progresses.map((progressItem, idx) => Math.ceil((100 - progressItem) / speeds[idx]));
    // days = [7,3,9]
    let result = [];
    let currentNum = 0;
    let currentDays = days[0];
    // currentDays = 7

    days.forEach(item => {
        if (currentDays < item) {
            currentDays = item;
            result.push(currentNum);
            currentNum = 0;
        }
        currentNum++;
    });

    result.push(currentNum);

    return result;
}