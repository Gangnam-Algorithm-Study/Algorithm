function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let q = [];
    for (_ = 0; _ < bridge_length; _++) {
        q.push(0);
    }

    console.log(q);
    let timer = 0;
    let onBridge = 0;
    let truckCount = truck_weights.length - 1;
    let truckIdx = 0;
    //모든 차가 다리 위에 진입할 때까지 반복한다.
    while (truckIdx <= truckCount) {
        timer++; //1초가 흐르면서
        let rear = q.pop(); //마지막 차 나가면서
        onBridge = onBridge - rear; //다리 위 트럭무게 내려감
        if (onBridge + truck_weights[truckIdx] <= weight) {
            //다음 차가 다리에 진입해도 제한무게보다 적다면
            q.unshift(truck_weights[truckIdx]);
            onBridge += truck_weights[truckIdx];
            truckIdx += 1;
        } else {
            //다음 차를 올릴 수 없다면 공백을 의미하는 0을 올림
            q.unshift(0);
        }
        // console.log(truckIdx,onBridge)
    }
    //모든 차가 다리 위에 올라간 순간부터 +다리의 길이 를 해야 직전에 진입한 차가 다리를 빠져나오기 때문에 더해준다.
    answer = timer + bridge_length;
    return answer;
}
