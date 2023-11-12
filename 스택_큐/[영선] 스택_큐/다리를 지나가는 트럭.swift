//
//  다리를 지나가는 트럭.swift
//  Algorithm
//
//  Created by 임영선 on 2023/11/02.
//

import Foundation

func solution(_ bridge_length:Int, _ weight:Int, _ truck_weights:[Int]) -> Int {
    var weights = truck_weights
    var arr = Array(repeating: 0, count: bridge_length) // 다리길이만큼 배열 만듦
    var sumWeight = 0
    var time = 0
    
    while !arr.isEmpty {
        time += 1
        let first = arr.removeFirst()
        sumWeight -= first
        
        if !weights.isEmpty {
            let truck = weights[0]
            // 다리를 지날 수 있으면 트럭 넣음
            if truck + sumWeight <= weight {
                weights.removeFirst()
                arr.append(truck)
                sumWeight += truck
            }
            // 다리를 못지나면 더미 데이터로 0을 넣음
            else {
                arr.append(0)
            }
        }
    }
    return time
    
}
