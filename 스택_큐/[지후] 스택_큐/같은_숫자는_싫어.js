// function solution(arr) {
//     return arr.filter((item, idx) => item !== arr[idx + 1]);
// }

// 스택을 사용한 풀이법
function solution(arr) {
    let stack = [];

    arr.forEach(nums => {
        if (stack.length === 0) {
            stack.push(nums);
        }

        if (stack[stack.length - 1] !== nums) {
            stack.push(nums);
        }
    })

    return stack;
}