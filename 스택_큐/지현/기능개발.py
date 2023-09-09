def solution(progresses, speeds):
    answer=[]
    newProgresses=[]
    for i in range(len(progresses)):
        newProgresses.append([progresses[i],speeds[i]])
    print(newProgresses)
    while newProgresses:
        for i in range(len(newProgresses)):
            newProgresses[i][0]+=newProgresses[i][1]
        count=0
        index=0
        for j in range(len(newProgresses)):
            if newProgresses[j][0]<100:
                break
            else:
                index=j
                count+=1
        if count!=0:
            newProgresses=newProgresses[index+1:]
            answer.append(count)
    return answer