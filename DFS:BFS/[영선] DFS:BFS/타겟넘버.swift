//
//  타겟넘버.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/13.
//

import Foundation

/*
 1. 숫자의 순서는 고정이다. 즉 달라지는 건 기호뿐 (+, -)
    따라서 +++++, ++++-, +++-+ .. 경우의 수를 모두 구한다.
 
 2. DFS(깊이)로 돌리고 깊이가 숫자개수랑 똑같아질때 컷하고 타겟 넘버인지 체크한다.
 */

func solution(_ numbers:[Int], _ target:Int) -> Int {
    
    var isPlus = Array(repeating: true, count: numbers.count)
    var answer = 0
    
    func DFS(depth: Int) {
        // 원하는 길이에서 넘어가면 컷하고 타겟넘버인지 체크
        if depth == numbers.count {
            if isTargetNum() {
                answer += 1
            }
        } else {
            isPlus[depth] = true
            DFS(depth: depth+1)
            isPlus[depth] = false
            DFS(depth: depth+1)
        }
    }
    
    // isPlus가 true면 +, false면 -로 계산해서 다 더하고 타겟넘버인지 체크
    func isTargetNum() -> Bool {
        var totalNum = 0
        for i in 0..<numbers.count {
            let num = isPlus[i] ? numbers[i] : numbers[i]*(-1)
            totalNum += num
        }
        return totalNum == target
    }
    
    DFS(depth: 0)
    
    return answer
}

