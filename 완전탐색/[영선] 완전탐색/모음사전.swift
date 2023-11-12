//
//  모음사전.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/13.

import Foundation

/*
 1. A ~ E 포문 돌리며 DFS를 돌린다.
 2. DFS(합친문자열, 현재문자열개수) -> 5개가 넘어가면 컷한다.
 */

func solution2(_ word:String) -> Int {
    
    let alphabets = ["A", "E", "I", "O", "U"]
    var dict: [String] = []
    var answer = 0
    
    func DFS(result: String, count: Int) {
        // 길이가 5를 넘어가면 컷
        if count > 5 {
            return
        }
        
        // 사전에 단어 추가
        dict.append(result)
        
        // 만약 사전에 단어가 있으면 컷
        if dict.contains(word) {
            answer = dict.firstIndex(of: word)!+1
            return
        }
        
        // A~E 포문 돌리며 하나씩 추가해봄
        for alphabet in alphabets {
            DFS(result: result+alphabet, count: count+1)
        }
        
    }
    
    for alphabet in alphabets {
        DFS(result: alphabet, count: 1)
    }
    
    return answer
}


print(solution2("AAAAE"))

