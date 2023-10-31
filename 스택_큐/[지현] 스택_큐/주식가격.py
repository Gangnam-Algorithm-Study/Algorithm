def solution(prices):
    answer = []
    for i in range(len(prices) - 1):
        sec = 0
        for j in range(i, len(prices) - 1):
            if(prices[i] <= prices[j]):
                sec += 1
            else:
                break
        answer.append(sec)
    answer.append(0)
    return answer