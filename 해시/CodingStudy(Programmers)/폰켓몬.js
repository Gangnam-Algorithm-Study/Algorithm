function solution(nums) {
    let answer = 0;
    const num = nums.length / 2;


    let obj = {};

    nums.forEach((element, key) => {
        obj[element] = element;
    });

    const types = Object.keys(obj).length;

    if (num <= types) {
        answer = num;
    }else {
        answer = types;
    }

    return answer;
}