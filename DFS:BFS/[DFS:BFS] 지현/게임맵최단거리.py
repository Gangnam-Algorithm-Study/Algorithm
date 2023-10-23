    
# bfs 함수 작성해서 bfs(0,0)의 값이 1이 나오면 -1을 리턴
# 나머지의 경우는 bfs(0,0)의 값을 answer에 반환하는 형식
from collections import deque
def solution(maps):
    answer = 0
    n = len(maps) #높이
    m = len(maps[0]) #너비
    dx = [-1, 1, 0, 0]  #좌우상하 움직이기위한 방향표?
    dy = [0, 0, -1, 1]

    def bfs(x,y):
        q = deque() #큐는 bfs 구현시 검사 대기열
        q.append((x,y)) #큐에 현재 좌표 추가하고 

        while q:    
            x, y = q.popleft()
            for i in range(4):  #좌우 상하 갈 수 있는지 검사 
                nx = x + dx[i]
                ny = y + dy[i]

                if nx < 0 or ny < 0 or nx >= n or ny >= m:#맵을 벗어나면 무시
                    continue
                if maps[nx][ny] == 0:   #벽이면 무시
                    continue
                if maps[nx][ny] == 1:   #처음 지나가는 길이면 거리 계산하고 다시 상하좌우 확인 *만약 처음지나가지 않는다면 maps의 값이 1일 수가 없다.
                    maps[nx][ny] = maps[x][y] + 1
                    q.append((nx, ny))  #큐에 추가하면 사실상 재귀
        return maps[n-1][m-1]   # 상대 팀 진영(제일 오른쪽 아래 칸)까지의 거리 반환

    if bfs(0,0) == 1:   #만약 도착지 숫자가1이라면 bfs이후에도 도착지 숫자가 변하지 않았기에 도착못한 것
        return -1
    else:
        answer = bfs(0,0)

    return answer