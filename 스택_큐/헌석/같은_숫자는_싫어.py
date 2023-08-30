def solution(arr):
    answer = [arr[0]]
    for i in range(1,len(arr)):
        last = answer.pop()
        answer.append(last)
        if last != arr[i]:
            answer.append(arr[i])
    return answer
