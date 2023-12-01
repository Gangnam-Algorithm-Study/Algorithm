//
//  프로세스.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/30.
//

import Foundation

func solution(_ priorities:[Int], _ location:Int) -> Int {
    var prio: [[Int]] = []
    for i in 0..<priorities.count {
        // [우선순위, 인덱스]
        prio.append([priorities[i], i])
    }
    
    let prioSorted = priorities.sorted {$0 > $1}
    var pointer = 0
    let len = prio.count
    var indexs: [Int] = []
    var answer = 0
    
    while pointer <= len-1 {
        if prio[0][0] < prioSorted[pointer] {
            let first = prio.removeFirst()
            prio.append(first)
        }
        else if prio[0][0] == prioSorted[pointer] {
            pointer += 1
            let first = prio.removeFirst()
            indexs.append(first[1])
        }
    }
    
    for i in 0..<indexs.count {
        if indexs[i] == location {
            answer = i+1
        }
    }
    return answer
}
