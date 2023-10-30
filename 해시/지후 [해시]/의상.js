function solution(clothes) {
    const clothesObj = {};
    let answer = 1;

    clothes.forEach(arr => {
        const [type, name] = arr;
        if (clothesObj.hasOwnProperty(name)) {
            clothesObj[name]++;
        } else {
            clothesObj[name] = 1;
        }
    })

    for (const key in clothesObj) {
        answer *= (clothesObj[key] + 1)
    }

    return answer - 1
}