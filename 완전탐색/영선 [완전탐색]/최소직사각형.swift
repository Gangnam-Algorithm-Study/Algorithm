//
//  최소직사각형.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/12.
//

import Foundation

/*
 처음 접근법
 1. 가로 기준으로 내림차순 정렬한다, 세로 기준으로 내림차순 정렬한다.
 2. 가로 max, 세로 max를 답으로 고정시키고 가로부터 줄여나감 and 세로부터 줄여나감
 
 가로, 세로 를 고정시키고 변경될 수 있다는 점을 고려하지 않음 -> 틀림 0.5솔
 
 정답
 1. 직사각형을 눕힌다. 즉 가로, 세로 중 큰 수를 가로라고 지정
 2. 가로 max 세로 max 크기를 구한다.
 
 */


func solution(_ sizes:[[Int]]) -> Int {
    
    var sizes = sizes
    for i in 0..<sizes.count {
        if sizes[i][1] > sizes[i][0] { //세로가 가로보다 크다면 큰 쪽을 가로로 바꿔준다.
            let temp = sizes[i][1]
            sizes[i][1] = sizes[i][0]
            sizes[i][0] = temp
        }
    }
    // 눕힌 도형들에서 가로의 max, 세로의 max값을 찾는다.
    let width = sizes.sorted(by: { $0[0] > $1[0] })[0][0]
    let height = sizes.sorted(by: { $0[1] > $1[1] })[0][1]
    return width*height
    
}

func solution(_ sizes:[[Int]]) -> Int {
    var maxWidth = 0
    var maxHeight = 0
    
    for size in sizes {
        maxWidth = max(maxWidth, size.max()!) // 가로, 세로 중에 큰 걸 가로로 판단
        maxHeight = max(maxHeight, size.min()!)
    }
    return maxWidth * maxHeight
}

print(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
