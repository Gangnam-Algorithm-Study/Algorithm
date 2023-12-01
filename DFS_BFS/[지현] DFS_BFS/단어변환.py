from collections import deque
        
def solution(begin, target, words):
    #비긴에서 타겟의 단어와 똑같이 변화해야 하는데 한 번에 하나의 알파벳만 변환 가능하고 words에 있는 단어들로만 거쳐 가야한다.
    if target not in words:
        return 0
    #최소단계를 말해달라고 했으니 DFS 로 차례로 탐색할 것임 
    #먼저 그래프를 만든다.
    newlist=words[:]
    newlist.append(begin)
    graph={}    #연결 그래프 제작
    wordlength=len(begin)
    for i in newlist:
        graph[i]=[]

    for i in newlist:
        for j in newlist:
            if i !=j:
                list1=list(i)
                list2=list(j)
                count=0
                
                for z in range(wordlength): #글자 순서대로 일치여부 확인하고 1글자만 다르면 그래프에 기록
                    if list1[z] != list2[z]:
                        count+=1
                if count==1:
                    graph[i].append(j)

    # print( graph)
    
    def bfs(graph,root):    #BFS로 푸는데 그래프에서 자식노드로 하나 넘어갈 때마다 count+ 해주고 현재 노드값==target 이라면 count 를 반환할거임 
        q= deque()  #큐 선언
        count=0     #초기 카운트 값
        q.append((root, count)) 
        visited=[]
        
        while q:
            now_node,now_count=q.popleft()  
            # print(now_node,now_count)
            visited.append(now_node)
            if now_node==target:
                return now_count
            elif graph[now_node]:
                for n in graph[now_node]:
                    if n not in visited:
                        q.append((n,now_count+1))
    
    
    result=0
    result=bfs(graph,begin)
    
    return result   