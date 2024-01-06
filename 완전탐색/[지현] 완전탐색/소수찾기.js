function solution(numbers) {
    let answer = 0;
    const arr = numbers.split("");
    // 순열로 경우의 수 구해야함
    let permutationArr = [];
    for (let i = 1; i <= arr.length; i++) {
        let plus = permutation(arr, i); //길이에 따라서 순열 구해서
        permutationArr = permutationArr.concat(plus); //합쳐준다.
    }
    let primeArr = [];
    for (j of permutationArr) {
        let num = Number(j.join(""));
        if (isPrime(num)) {
            primeArr.push(num);
        }
    }
    primeArr = new Set(primeArr); //set으로 중복제거
    console.log(primeArr);
    answer = [...primeArr].length;
    return answer;
}

function permutation(arr, n) {
    //순열 구하는 함수 -> arr,순열의 길이 n을 파라미터로 받음
    const result = [];
    const visited = Array(arr.length).fill(false);
    function dfs(current) {
        if (current.length === n) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                current.push(arr[i]);
                dfs(current);
                current.pop();
                visited[i] = false;
            }
        }
    }
    dfs([]);
    return result;
}

function isPrime(num) {
    //소수판별 함수 -> true,false 반환
    if (num <= 1) {
        //1 이하는 소수아님
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
