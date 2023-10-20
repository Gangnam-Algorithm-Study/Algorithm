def solution(answers):
    person1=[1, 2, 3, 4, 5]
    person2=[2, 1, 2, 3, 2, 4, 2, 5]
    person3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    correct=[0,0,0]
    answer=[]
    for i in range(len(answers)):
        if answers[i]== person1[i%len(person1)]:
            correct[0]+=1
        if answers[i]== person2[i%len(person2)]:
            correct[1]+=1
        if answers[i]== person3[i%len(person3)]:
            correct[2]+=1
    maxcorrect= max(correct)
    for index,j in enumerate(correct):
        if j == maxcorrect:
            answer.append(index+1)
    return answer

print(solution([1,3,2,4,2]))