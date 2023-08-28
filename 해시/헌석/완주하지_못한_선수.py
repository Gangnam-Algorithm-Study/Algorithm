def solution(participant, completion):
    
    people = dict()
    
    for i in participant:
        if i in people:
            people[i]+=1
        else:
            people[i] = 1
    
    for i in completion:
        if people[i] > 1:
            people[i]-=1
        else:
            people.pop(i)
    
    for i in people:
        answer = i
    return answer