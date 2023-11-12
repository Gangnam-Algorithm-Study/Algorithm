def solution(brown, yellow):
    answer = []
    div=[]
    for i in range( 1, int(yellow**(1/2))+1): #yellow는 직사각형 형태이기에 직사각형 변의 길이 경우의 수 찾기
        if yellow%i==0:
            if i**2==yellow:
                div.append([i, i])
            else:
                div.append([yellow/i, i])
    for j in div:   #직각사각형의 네 변 길이의 합 -4 = 갈색블럭
        if(j[0]+2)*2+(j[1]+2)*2-2==brown:
            answer.append(j[0]+2)
            answer.append(j[1]+2)
            break
        else:continue
    return answer