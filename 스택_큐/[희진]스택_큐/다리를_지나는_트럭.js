function solution(bridge_length, weight, truck_weights) {
  // 다리를 나타내는 큐를 초기화하고, 초기 상태는 모두 0으로 채움
  const bridgeQueue = Array(bridge_length).fill(0);

  // 현재 다리 위의 무게를 나타내는 변수 초기화
  let currentWeight = 0;

  // 경과 시간을 나타내는 변수 초기화
  let time = 0;

  // 다리 위에 트럭이 있거나, 대기 중인 트럭이 남아있을 때까지 반복
  while (bridgeQueue.length > 0 || truck_weights.length > 0) {
    // 시간이 1초씩 증가
    time++;

    // 다리를 나가는 트럭의 무게를 현재 다리 위의 무게에서 뺌
    currentWeight -= bridgeQueue.shift();

    // 대기 중인 트럭이 다리에 올라갈 수 있을 때
    if (
      truck_weights.length > 0 &&
      currentWeight + truck_weights[0] <= weight
    ) {
      // 대기 중인 트럭 중 가장 앞의 트럭을 꺼내 다리에 넣고, 다리 위 무게를 갱신
      const truck = truck_weights.shift();
      bridgeQueue.push(truck);
      currentWeight += truck;
    } else {
      // 대기 중인 트럭이 다리에 올라갈 수 없으면 0을 큐에 추가
      bridgeQueue.push(0);
    }
  }

  // 최종적으로 걸린 시간을 반환
  return time;
}
