
#전선중 하나를 끊어서 두 전력망으로 나누는데, 최대한 수가 비슷하게 나누려 하는데 두 송전탑 개수 차이 반환하라 

# n= 송전탑수 max200 / wires=[[송전탑1,송전탑2],[],...] max n-1길이 

# 연결중 하나를 뺄건데 
# 조합으로 wires에서 wires길이-1 개를 뽑음 혹은 하나만 제거니까 idx=0~ 하나씩 늘려가며 무시할 수도 있다.
#연결 하나 빼고 그래프 정보를 확보하고 트리 순회를 하면서 두 값을 찾는다.[x,y ] 그리고 차이를 구한다.

from itertools import combinations
from collections import deque
        
def solution(n, wires):
    combiWires=list(combinations(wires, len(wires)-1))  #combiWires 에 연결 하나만 뺀 조합 경우의 수 모두 담는다. [(조합1), (조합2), ...] 형태가 될 예정
    # print(combiWires)
    answer=n-2  #가능한 최대값으로 초기세팅 
    for i in combiWires:
        graph={}    #각 노드의(네트워크의) 연결을 기록할 graph {1:[2], 2:[1,4],3:[7]..} 형태가 될 것 
        for connect in i:
            [node1,node2]=connect
            if node1 in graph:
                graph[node1].append(node2)
            else:
                graph[node1]=[node2]
            if node2 in graph:
                graph[node2].append(node1)
            else:
                graph[node2]=[node1]
        # print(graph)
        visited=[]
        length=[]   #그래프의 길이를 담아낼 배열 -> [n] or [n,n2] 형태로만 나올 것임 
        for n in graph:
            if n not in visited:    #방문하지 않은 노드만 dfs에 들어가도록 
                length.append(dfs(n,graph,visited,1))   #
        print(length)
        if len(length)>=2:  #만약 길이가 1이라면 맨 끝쪽 노드만 잘라낸것 -> 네트워크를 두개로 나눈다는 조건에 부합x
            diff= abs(length[0]-length[1])
            answer=min(answer,diff) #최소 차이값이 필요하니까
    return answer

def dfs(node,graph,visited,l):  #(현노드번호, 그래프기록, 방문기록, 그래프의길이누적)
        q=deque()   
        q.append(node)
        visited.append(node)
        while q:
            cur_node=q.popleft()
            if cur_node in graph:   #그래프에 있는지 확인해야함 내가 기록한 그래프는 연결없는 단독 노드라면 키가 존재하지 않음
                for next in graph[cur_node]:
                    if next not in visited:
                        l+=1    #방문하면서 길이 누적 
                        visited.append(next)    #방문여부 기록하고
                        q.append(next)  #연결된 노드 탐색 대기열에 기록 
        return l    #우리에게 필요한 것은 그래프의 길이이기에 길이 return
