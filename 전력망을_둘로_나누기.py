# def solution(n, wires):
#     answer = -1
#     resultlist=[]
#     # idx 돌면서 연결 하나씩 제외하기 
#     for i in range(n):
#         for idx in range(n):
#             list1=[]
#             list2=[]
#             if i==idx:
#                 continue
#             else: 
#                 if wires[idx][0] in list1:
#                     list1.append(wires[idx][1])
#                 elif wires[idx][0] in list2:
#                     list2.append(wires[idx][1])
#                 elif list1==[]:
#                     list1.append(wires[idx][0])
#                     list1.append(wires[idx][1])
#                 elif list2==[]:
#                     list2.append(wires[idx][0])
#                     list2.append(wires[idx][1])
#         resultlist.append(abs(len(list1)-len(list2)))
#         answer= min(resultlist)
    
#     return answer

#! 도저히 모르겠어서 다른 사람 답안 봄... 그런데도 이해 잘 안됨 
from collections import deque, defaultdict

def solution(n, wires):
    wires = [[i-1, j-1] for i, j in wires]
    routes = [[] for _ in range(n)]
    vals = [defaultdict(int) for _ in range(n)]
    for i, j in wires:
        routes[i].append(j)
        routes[j].append(i)
    tovisit = deque(range(n))
    minv = n
    while len(tovisit) > 1:
        tovisit.rotate()
        cn = tovisit[-1]
        if len(routes[cn]) == len(vals[cn])+1:
            tovisit.pop()
            v = 1
            for i in routes[cn]:
                if not vals[cn][i]:
                    nn = i
                v += vals[cn][i]
            vals[nn][cn] = v
            minv = min(minv, abs(n-2*v))
    return minv
