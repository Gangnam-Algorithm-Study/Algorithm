def solution(nums):

    pokemon = dict()

    for num in nums:
        if num in pokemon:
            pokemon[num] += 1
        else :
            pokemon[num] = 1
    
    answer = min([len(pokemon),len(nums)/2])

    return answer