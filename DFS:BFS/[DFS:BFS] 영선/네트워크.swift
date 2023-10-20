//
//  네트워크.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/13.
//

import Foundation

/*
 이어져있는 덩어리 개수를 구하는 문제다.
 
 1. DFS로 쭉쭉 갈 수 있는 곳까지 돌린다.
 2. 포문으로 버텍스 첨부터 끝까지 돌리고 방문안한 곳 또 DFS 돌린다.
 3. DFS가 모두 빠져나온 순간 덩어리 하나로 취급해서 +1한다.
 
 */

func solution(_ n:Int, _ computers:[[Int]]) -> Int {
    var isVisited = Array(repeating: false, count: n)
    var answer = 0
    
    func DFS(_ v: Int) {
        for i in 0..<n {
            // 방문하지 않았고 이어져있으면(1이면)
            if !isVisited[i] && computers[v][i] == 1 {
                isVisited[i] = true
                DFS(i)
            }
        }
    }
    
    for i in 0..<n {
        if !isVisited[i] {
            DFS(i)
            answer += 1
        }
    }
    
    return answer
    
}
