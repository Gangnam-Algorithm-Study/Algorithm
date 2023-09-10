from collections import deque

def solution(bridge_length, weight, truck_weights):

    truck_weights = deque(truck_weights)

    time = 0

    bridge = deque([])

    while truck_weights or bridge:
        time += 1
        
        can = weight
        for truck in bridge:
            can -= truck[0]
        
        if truck_weights:
            if truck_weights[0] <= can:
                bridge.append([truck_weights.popleft(), 0])

        for truck in bridge:
            truck[1] += 1

        if bridge:
            if bridge[0][1] == bridge_length:
                bridge.popleft()
     
    return time + 1

