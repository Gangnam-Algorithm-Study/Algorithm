def solution(prices):

    l = len(prices)
    answer = []

    for i in range(l):

        cnt = 1

        for j in range(i+1,l):

            if prices[i] <= prices[j]:
                cnt += 1
            else:

                break
            if j+1 == l:
                cnt -= 1
        if i+1 == l:
            cnt -= 1

        answer.append(cnt)

    return answer
