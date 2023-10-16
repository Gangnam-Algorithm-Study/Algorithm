//
//  전력망둘로나누기.swift
//  Algorithm
//
//  Created by 임영선 on 2023/10/13.
//

import Foundation

/*
 1. 이중배열에 연결점을 넣는다. (vertex는 1부터 시작이기 때문에 0은 비워둠) ex) [[], [3], [3], [1,2,4]]
 
 2. wires를 포문을 돌리며 연결점을 제거해본다.
 
 3. 하나 제거한 상태에서 DFS를 돌려본다.
    이때 DFS는 DFS(그래프, 현재정점)이고 DFS가 갈 수 있는 끝까지 갔을 때 방문한 정점 개수 count를 구한다.
    (한 쪽의 depth만 구해도 다른 한쪽의 개수를 알 수 있기때문에 그냥 1부터 돌린다)
 
 4. wires 하나 제거할때마다 송전탑의 개수 차이를 구한다. (다음 wires뺄때 visited, count 초기화)
 
 */

func solution(_ n:Int, _ wires:[[Int]]) -> Int {
    
    var answer = 100
    var networks: [[Int]] = Array(repeating: [], count: n+1)
    var visited = Array(repeating: false, count: n+1)
    var count = 1 // 방문한 송전탑의 개수
    
    // DFS(그래프, 현재송전탑 버텍스)
    func DFS(graph: [[Int]], v: Int) {
        for i in 0..<graph[v].count {
            let vertex = graph[v][i]
            if !visited[vertex] {
                visited[vertex] = true
                count += 1
                DFS(graph: graph, v: graph[v][i])
            }
        }
    }
    
    // arr에 연결점을 넣는다. (인덱스 0은 무시)
    for i in 0..<wires.count {
        let a = wires[i][0], b = wires[i][1]
        networks[b].append(a)
        networks[a].append(b)
    }
    
    // 연결을 하나씩 끊어보며 DFS 돌린다.
    for i in 0..<wires.count {
        // 연결선을 지운다.
        var graph = networks
        let a = wires[i][0], b = wires[i][1]
        let index1 = graph[b].firstIndex(of: a)!
        graph[b].remove(at: index1)
        let index2 = graph[a].firstIndex(of: b)!
        graph[a].remove(at: index2)
        
        // DFS 돌리기 전에 방문여부, 방문한 송전탑개수 초기화 (1은 방문했다고 가정하고 시작)
        visited = Array(repeating: false, count: n+1)
        visited[1] = true
        count = 1
        DFS(graph: graph, v: 1)
        
        
        // 다른 한쪽 송전탑 개수를 구해서 차를 구한다.
        let anotherTopCount = abs(n-count)
        answer = min(answer, abs(count-anotherTopCount))
    }
    
    return answer
}

print(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))
