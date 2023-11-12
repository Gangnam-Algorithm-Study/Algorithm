//
//  기능개발.swift
//  Algorithm
//
//  Created by 임영선 on 2023/11/03.
//

import Foundation

func solution(_ progresses:[Int], _ speeds:[Int]) -> [Int] {
    var days: [Int] = []
    for i in 0..<progresses.count {
        let num = 100-progresses[i]
        
        // 딱 나누어 떨어지면 100-progress 삽입
        if num % speeds[i] == 0 {
            days.append(Int(num/speeds[i]))
        } else {
            days.append(Int(num/speeds[i])+1)
        }
    }
    print(days)
    var max = days[0]
    var count = 1
    var answer: [Int] = []
    
    if days.count == 1 {
        return [1]
    }
    else {
        for i in 1..<days.count-1 {
            if max >= days[i] {
                count += 1
            }
            else {
                max = days[i]
                answer.append(count)
                count = 1
            }
        }
        
        if max >= days[days.count-1] {
                count += 1
                answer.append(count)
        }
        else {
            answer.append(count)
            answer.append(1)
        }
    }
    return answer
}
