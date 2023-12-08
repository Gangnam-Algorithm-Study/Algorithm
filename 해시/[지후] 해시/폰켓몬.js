// 첫번째 방식
// 중복값들을 제거하여 해당하는 갯수를 반환
function solution(nums) {
    const max = nums.length / 2;
    const result = [...new Set(nums)];

    return result.length > max ? max : result.length;
}

// 두번째 방식
// 중복값을 제거하는 알고리즘을 Set에서 -> 배열을 사용하는 방법으로 변경

function solution(nums) {
    const max = nums.length / 2;
    let parseNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (!parseNums.includes(nums[i])) {
            parseNums.push(nums[i]);
        }
    }

    return parseNums.length > max ? max : parseNums.length;
}