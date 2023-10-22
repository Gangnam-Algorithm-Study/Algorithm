function solution(prices) {
    const stack = []; // 주식 가격을 저장할 스택
    const result = Array(prices.length).fill(0).map((_, idx) => idx).reverse(); // 결과를 저장할 배열, 초기값은 가격 배열의 길이-1부터 0까지
    const visited = []; // 방문 여부를 저장할 배열

    // 주식 가격 배열을 순회
    prices.forEach((price, idx) => {
        const sLastIdx = stack.length - 1;

        // 주식 가격이 이전 가격보다 작으면 가격이 하락한 것
        if (price < stack[sLastIdx]) {
            let backTrackingIdx = 0;
            // 가격이 하락할 때까지 이전 가격들을 역추적하며 가격이 하락한 시간을 계산
            while (price < stack[sLastIdx - backTrackingIdx]) {
                if (!visited[sLastIdx - backTrackingIdx]) {
                    // 해당 가격에 대한 가격 하락 기간 계산 및 결과 배열에 저장
                    result[sLastIdx - backTrackingIdx] -= (prices.length - 1 - idx);
                    visited[sLastIdx - backTrackingIdx] = true;
                }
                backTrackingIdx++;
            }
        }
        // 현재 가격을 스택에 추가
        stack.push(price);
    });

    return result; // 각 가격에 대한 가격 하락 기간을 담은 배열 반환
}