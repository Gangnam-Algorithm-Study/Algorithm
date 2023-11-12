//
//  카펫.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/12.
//

import Foundation

/*
 1. 노랑블록 + 브라운블록 총 개수를 구한다.
 2. 총 개수의 곱하기 짝을 찾는다.
 3. (가로*2) + (세로*2) - 4 가 브라운 개수랑 같은 짝이 답
 
 */

func solution(_ brown:Int, _ yellow:Int) -> [Int] {
   let sum = brown+yellow
    
    // 곱하기짝을 담을 배열
    var sizes: [[Int]] = []
    
    for i in 1...sum {
        if sum % i == 0 {
            let a = sum/i
            let b = sum/a
            
            // 짝 중복 제거
            if a < b { break }
            sizes.append([a,b])
        }
    }
    
    for size in sizes {
        let brownCount = (size[0]*2 + size[1]*2)-4
        if brown == brownCount {
            return size
        }
    }

    return []
}

print(solution(24, 24))


