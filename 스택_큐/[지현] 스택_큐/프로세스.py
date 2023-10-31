def solution(priorities, location):
    sequence=[]
    while sum(priorities)!=0:
        for index, priority in enumerate(priorities):
            if priority==0:
                continue
            elif max(priorities)<=priority:
                sequence.append(index)  #실행되면 인덱스를 시퀀스에 넣어줌
                priorities[index]=(0)   #실행된 요소들은 0으로 바꿈
    # print(sequence)
    return sequence.index(location)+1