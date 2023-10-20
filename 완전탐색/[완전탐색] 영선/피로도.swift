//
//  피로도.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/16.
//

import Foundation

func solution(_ k:Int, _ dungeons:[[Int]]) -> Int {
    
    var answer = 0
    var visited = Array(repeating: false, count: dungeons.count)
    
    func DFS(_ k: Int, count: Int) {
        // 현재 저장된 던전개수보다 더 많은 개수를 갔다면 답 바꿈
        if answer < count {
            answer = count
        }
        
        for i in 0..<dungeons.count {
            // 방문하지 않았고 최소 피로도가 충족이 되면
            if !visited[i] && k >= dungeons[i][0] {
                visited[i] = true
                DFS(k-dungeons[i][1], count: count+1)
                visited[i] = false
            }
        }
        
    }
    
    DFS(k, count: 0)
    
    return answer
}
