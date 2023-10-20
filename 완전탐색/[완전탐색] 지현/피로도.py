from itertools import permutations

def solution(k, dungeons):
    answer = -1

    dungeons_permutaion = []
    for i in permutations(dungeons,len(dungeons)):  #던전방문 경우의 수 순열로 모두 정리
        dungeons_permutaion.append(list(i))
    #! 위 식을 아래와 같이 간단하게 표현할 수 있음 
    #dungeons_permutaion= list(permutations(dungeons,len(dungeons)))
    
    # print(dungeons_permutaion)

    results=[]  #몇개의 던전 돌았는지 기록할 list
    for case in dungeons_permutaion:    #각 케이스 돌면서 던전 개수 기록
        count=0
        stamina=k
        for j in case:
            if stamina>=j[0] and stamina-j[1]>=0:
                stamina-= j[1]
                count+=1
            else: break
        results.append(count)
    # print(results)
    answer= max(results)    #최대 던전개수 반환

    return answer

a = [[80,20],[50,40],[30,10]]
permute = permutations(a,2)

print(list(permute))