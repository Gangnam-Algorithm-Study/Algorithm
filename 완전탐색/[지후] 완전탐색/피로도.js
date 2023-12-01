// k = 유저의 현재 피로도
// dungeons = [최소 필요 피로도, 소모 피로도] 2차원 배열
function solution(k, dungeons) {
    let result = 0;

    // 헬퍼 메소드
    // 외부로 빼지 않는 이유 = result 값이 초기화 되기 때문
    const dfs = (k, dungeons, prev) => {

        // dungeons loop
        for (let i = 0; i < dungeons.length; i++) {

            // req = 최소 필요 피로도
            // use = 소모 피로도 
            const [req, use] = dungeons[i];

            // req가 없거나 req가 k 보다 크면 for문의 처음으로 돌아감
            if (!req || req > k) continue;

            // 원본 배열 보존
            const copy = [...dungeons].map((v) => [...v]);

            // 이미 실행 된것은 null 값 할당
            copy[i] = [null, null];

            // 헬퍼 메소드 재 실행
            dfs(k - use, copy, prev + 1);
        }

        return (result = Math.max(prev, result));
    };

    dfs(k, dungeons, 0);

    return result;
}