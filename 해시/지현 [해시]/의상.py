def solution(clothes):
    dict={}
    for i in clothes:
        if i[1] not in dict.keys():
            dict[i[1]]=[i[0]]
        else :
            dict[i[1]].append(i[0])
    answer=1
    print(dict)
    for j in dict.values():
        answer*= len(j)+1
    return answer-1 #-1아예 안입는건 안됨 