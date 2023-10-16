function solution(numbers) {
    // 결과를 저장할 빈 배열 선언
    const result = [];
    let nums = numbers.split('');

    // 순열 만들기 함수 정의
    const getPermutation = (arr, fixed) => {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                // 현재 숫자와 고정된 숫자를 합쳐 새로운 숫자 생성
                const newNum = fixed + arr[i];

                // 기존 배열 보존
                const copyArr = [...arr];
                copyArr.splice(i, 1);

                // 생성된 숫자가 결과 배열에 없고 소수인 경우 결과 배열에 추가
                if (!result.includes(+newNum) && isPrimeNum(+newNum)) {
                    result.push(+newNum);
                }

                // 재귀적으로 다음 숫자를 추가하여 순열 생성
                getPermutation(copyArr, newNum);
            }
        }
    };

    // 소수 판별 함수 정의
    const isPrimeNum = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 주어진 숫자로 순열 생성 시작
    getPermutation(nums, '');

    // 결과 배열의 길이를 반환
    return result.length;
}