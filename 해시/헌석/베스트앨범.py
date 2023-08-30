def solution(genres, plays):
    
    music = dict()
    
    for i in range(len(genres)):
        if genres[i] in music:
            music[genres[i]][0] += plays[i]
            music[genres[i]].append(plays[i])

        else:
            music[genres[i]] = [plays[i],plays[i]]

    album = []
    for i in music:
        music[i].sort()
        music[i].reverse()
        album.append(music[i][:3])

    album.sort(key = lambda x : x[0])
    album.reverse()

    answer = []
    dis = 0

    for i in album:

        for j in music:
            if music[j][0] == i[0]:

                for k in range(len(genres)):
                    if genres[k] == j and plays[k] == i[1]:
                        answer.append(k)
                        plays[k] = dis
                        dis -= 1
                        i[1] = dis
                        dis -= 1
                        if len(i) == 3:
                            for o in range(len(genres)):
                                if genres[o] == j and plays[o] == i[2]:
                                    answer.append(o)
                                    plays[k] = dis
                                    dis -= 1
                                    i[2] = dis
                                    dis -= 1

    return answer
