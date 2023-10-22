//
//  모의고사.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/12.
//

import Foundation
/*
 1. 1,2,3사람의 반복적인 정답을 배열로 만든다.
 2. 모듈러로 index가 넘어갈경우 나머지를 구해서 정답이 같으면 +1
 3. 정답 수 기준으로 정렬하고 max값을 찾아 max값에 해당한느 경우 정답에 넣어줌
 
 */
func solution(_ answers:[Int]) -> [Int] {
    let people1 = [1,2,3,4,5]
    let people2 = [2,1,2,3,2,4,2,5]
    let people3 = [3,3,1,1,2,2,4,4,5,5]
    var answerCount: [[Int]] = [[1,0], [2,0], [3,0]]

    for i in 0..<answers.count {
        // 정답이면 +1
        if answers[i] == people1[i%people1.count] {
            answerCount[0][1] += 1
        }
        if answers[i] == people2[i%people2.count] {
            answerCount[1][1] += 1
        }
        if answers[i] == people3[i%people3.count] {
            answerCount[2][1] += 1
        }
    }

    // 정답 수 기준으로 정렬
    answerCount.sort(by: { $0[1] > $1[1] })
    let max = answerCount[0][1]

    var answer: [Int] = []

    for i in 0..<answerCount.count {
        if answerCount[i][1] == max {
            answer.append(answerCount[i][0])
        } else {
            break
        }
    }

    return answer
}


func solution(_ answers:[Int]) -> [Int] {
    
    let answer = (
        people1: [1,2,3,4,5],
        people2: [2,1,2,3,2,4,2,5],
        people3: [3,3,1,1,2,2,4,4,5,5]
    )
    
    var score = [1:0, 2:0, 3:0]
    
    
    for i in 0..<answers.count {
        if answers[i] == answer.people1[i%5] { score[1] = score[1]!+1 }
        if answers[i] == answer.people2[i%8] { score[2] = score[2]!+1 }
        if answers[i] == answer.people3[i%10] { score[3] = score[3]!+1 }
    }
    
    return score.sorted{$0.key < $1.key}.filter{ $0.value == score.values.max() }.map{$0.key}
    
}

print(solution([1,3,2,4,2]))


