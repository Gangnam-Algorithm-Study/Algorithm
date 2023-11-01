function solution(nums) {
    const max = nums.length / 2;
    const result = [...new Set(nums)];

    return result.length > max ? max : result.length;
}