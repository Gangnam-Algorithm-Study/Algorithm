def solution(sizes):
    
    answer=0
    for i in sizes:
        i.sort()
    short=0
    long=0
    for j in sizes:
        if j[0]>=short:
            short=j[0]
        if j[1]>=long:
            long=j[1]
    answer=short*long
    return answer