def solution(sizes):
    #최대크기 명함 기준으롤 정리해야함
    answer=0
    for i in sizes:
        i.sort()    #명함 (짧은변, 긴 변) 모양으로 정리
    short=0 #짧은 변 기준 최대값
    long=0  #긴 변 기준 최대값
    for j in sizes: #순회하면서 각 변의 최대값 최신화
        if j[0]>=short:
            short=j[0]
        if j[1]>=long:
            long=j[1]
    answer=short*long
    return answer