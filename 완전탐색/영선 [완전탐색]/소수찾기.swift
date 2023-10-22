//
//  소수찾기.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/12.
//

import Foundation

/*
 1. 모든 조합의 경우의 수를 구해야한다. ex 1,7 -> 1 7 17 71
 2. 길이로 DFS를 돌린다 -> DFS(결과값, 현재길이, 목표길이)
 3. 현재길이 == 목표길이면 스탑하고 소수인지 판단한다.
 
 */

func solution(_ numbers: String) -> Int {
    
    let nums = Array(numbers).map {$0.wholeNumberValue!}
    var primes = Set<Int>()
    var visited = Array(repeating: false, count: nums.count)
    
    
    // 소수면 true리턴
    func isPrime(_ num: Int) -> Bool {
        if num < 2 {
            return false
        }
        
        for i in 2..<num {
            if num % i == 0 {
                return false
            }
        }
        return true
    }
    
    // (계산값, 현재길이, 목표길이)
    func DFS(result: Int, currentLen: Int, len: Int) {
        
        // 목표길이가 되면 소수인지 판별
        if currentLen == len {
            if isPrime(result) { primes.insert(result) }
        } else {
            for i in 0..<nums.count {
                if !visited[i] {
                    visited[i] = true
                    DFS(result: result*10+nums[i], currentLen: currentLen+1, len: len)
                    visited[i] = false
                }
            }
        }
    }
    
    // 1자리 ~ 숫자만큼 최대길이 DFS 돌린다.
    for i in 1...nums.count {
        DFS(result: 0, currentLen: 0, len: i)
    }
    
    print(primes)
    return primes.count
}
