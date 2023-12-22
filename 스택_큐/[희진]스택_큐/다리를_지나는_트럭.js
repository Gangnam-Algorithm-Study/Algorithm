function solution(bridge_length, weight, truck_weights) {
  // 다리를 건너는 트럭을 나타내는 큐
  const onBridge = [];

  // 다리 위 트럭의 총 무게
  let currentWeight = 0;

  // 시간 측정
  let time = 0;

  // 대기 중인 트럭이 없고 다리 위 트럭도 없을 때까지 반복
  while (truck_weights.length > 0 || onBridge.length > 0) {
    time++;

    // 다리 위 트럭의 이동 처리
    if (onBridge.length > 0 && time - onBridge[0].entryTime === bridge_length) {
      // 다리를 다 건넌 트럭을 큐에서 제거하고, 다리 위 무게 갱신
      currentWeight -= onBridge.shift().weight;
    }

    // 대기 중인 트럭이 다리에 올라갈 수 있을 때
    if (
      truck_weights.length > 0 &&
      currentWeight + truck_weights[0] <= weight
    ) {
      // 대기 중인 트럭을 다리에 올리고, 다리 위 무게 갱신
      const truck = truck_weights.shift();
      currentWeight += truck;
      // 트럭의 진입 시간을 기록하여 나중에 다리를 다 건넜는지 확인
      onBridge.push({ weight: truck, entryTime: time });
    }
  }

  return time;
}
