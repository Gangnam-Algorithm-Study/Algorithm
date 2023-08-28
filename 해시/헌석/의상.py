

def solution(clothes):

    clothes_dict = dict()

    for clothe in clothes:
        if clothe[1] in clothes_dict:
            clothes_dict[clothe[1]] += 1
        else:
            clothes_dict[clothe[1]] = 1

    answer = 1
    for clothe in clothes_dict:
        answer *= clothes_dict[clothe]+1

    
    return answer -1

print(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
