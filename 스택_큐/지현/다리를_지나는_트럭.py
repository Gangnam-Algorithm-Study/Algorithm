
def solution(bridge_length, weight, truck_weights):
    bridge=[]
    for i in range(bridge_length):
        bridge.append(0)
    # bridge=[0 for i in range(bridge_length)] #또다른 방법
    count=0
    sumWeight=0
    while truck_weights!=[]:
        count+=1
        sumWeight-=bridge[-1]
        del bridge[-1]
        
        bridge.insert(0,0)
        #원래는 sum(bridge)로 다리위 무게총합을 구했는데 그렇게하니 시간초과 발생함 
        if sumWeight+truck_weights[0]<=weight:
            bridge[0]=truck_weights[0]
            sumWeight+=truck_weights[0]
            del truck_weights[0]

    return count+bridge_length

print(solution(2,10,[7, 4, 5, 6]))