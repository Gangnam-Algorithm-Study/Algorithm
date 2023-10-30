function solution(bridge_length, weight, truck_weights) {
    // 다리의 길이만큼 0으로 채움
    let bridge = new Array(bridge_length).fill(0);
    let time = 0;

    while (bridge.length) {
        // 다리의 맨 앞의 트럭을 제거 (다리를 한 칸 전진시킴)
        bridge.shift();
        if (truck_weights.length) {
            // 다리 위에 있는 트럭들의 무게를 합산
            const sumBridge = bridge.reduce((a, b) => a + b, 0);
            // 현재 트럭을 다리에 올릴 수 있는지 확인
            if (sumBridge + truck_weights[0] <= weight) {
                // 다리에 현재 트럭을 올리고 대기열에서 제거
                bridge.push(truck_weights.shift());
            } else {
                // 다리에 트럭을 올릴 수 없으면 0을 올림 (다리 위의 무게를 유지)
                bridge.push(0);
            }
        }
        // 시간을 1 증가시킴
        time++;
    }
    // 모든 트럭이 다리를 통과한 시간 반환
    return time;
}