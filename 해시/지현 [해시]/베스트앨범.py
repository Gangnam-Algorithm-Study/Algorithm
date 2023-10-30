def solution(genres,plays):
    #딕셔너리에 {장르1:[],}
    answer=[]
    dict={}
    totaldict={}#장르별 총합
    for i in range(len(genres)):
        if genres[i] not in dict:
            dict[genres[i]]=[] 
            totaldict[genres[i]]=0
        totaldict[genres[i]]+=plays[i]
        dict[genres[i]].append([plays[i],i])    #각 곡을[플레이수,인덱스]형태로 넣기
    #총 재샛수 기준으로 랭킹
    rank = sorted(totaldict, key=lambda x:totaldict[x], reverse=True)
                
    for item in rank:
        # 재생수 기준으로 내림차순 곡 정렬
        temp = sorted(dict[item], key=lambda x:(x[0],-x[1]), reverse=True)
        # 두개만 고른다.
        for i in range(2):
            answer.append(temp[i][1])
            #특정 장르가 한곡만 있으면 루프깨기
            if len(dict[item])<2: break
    return answer

    
    