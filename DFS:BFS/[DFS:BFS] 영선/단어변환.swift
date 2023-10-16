//
//  단어변환.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/16.
//

import Foundation

/*
 DFS(문자열, 깊이)
 */

func solution(_ begin:String, _ target:String, _ words:[String]) -> Int {
    var visited = Array(repeating: false, count: words.count)
    var answer = Int.max
    
    func DFS(result: String, depth: Int) {
        if result == target {
            answer = min(answer, depth)
        }
        else if answer > depth {
            for i in 0..<words.count {
                if !visited[i] && isEnabledChange(result, words[i]) {
                    visited[i] = true
                    DFS(result: words[i], depth: depth+1)
                    visited[i] = false
                }
            }
        }
    }
    
    // 1개의 알파벳이 다른 경우만 true 리턴
    func isEnabledChange(_ word1: String, _ word2: String) -> Bool {
        let word1 = word1.map {String($0)}
        let word2 = word2.map {String($0)}
        var countOfDifferent = 0
        for i in 0..<word1.count {
            if word1[i] != word2[i] {
                countOfDifferent += 1
                if countOfDifferent > 1 {
                    return false
                }
            }
        }
        return true
    }
    
    // 타겟이 단어들에 있는 경우만 DFS 돌림
    if words.contains(target) {
        for i in 0..<words.count {
            // 바꿀 수 있는 문자열들만 DFS돌림
            if isEnabledChange(words[i], begin) {
                visited = Array(repeating: false, count: words.count)
                DFS(result: words[i], depth: 1)
            }
        }
    } else {
        return 0
    }
    
    return answer
    
}

print(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
