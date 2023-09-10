from collections import deque

def solution(priorities, location):

    priorities = deque(priorities)
    ref = deque([])

    for i in range(len(priorities)):
        ref.append(i)

    cnt = 0

    for i in range(len(priorities)):

        find = max(priorities)

        while True:
            if find == priorities[0]:
                priorities.popleft()
                cnt += 1
 
                if location == ref.popleft():
                    answer = cnt
                
                break
            else:
                priorities.append(priorities.popleft())
                ref.append(ref.popleft())

    return answer
