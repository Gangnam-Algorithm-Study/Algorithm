def solution(genres,plays):
    #딕셔너리에 {장르1:[],}
    dict={}
    for i in range(len(genres)):
        if genres[i] not in dict:
            dict[genres[i]]=[]
            dict[genres[i]].append(0)  #첫 값은 플레이수 총합
        dict[genres[i]][0]+= plays[i]
        dict[genres[i]].append([plays[i],i])    #[플레이수,인덱스]형태로 넣기
    print(dict)
    for genre in dict.values():
        print(genre)
    return True
    
    