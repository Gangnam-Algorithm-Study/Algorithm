def solution(progresses, speeds):

    answer = []

    all = len(progresses)
    complete = 0

    while complete != all:

        for i in range(all):
            progresses[i] += speeds[i]
        
        cnt = 0
        for i in range(all):
            if progresses[i] >= 100:
                cnt += 1
            else:
                break

        if complete != cnt:
            answer.append(cnt-complete)
        complete = cnt

    return answer
