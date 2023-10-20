# from itertools import permutations


# def solution(word):
#     alpha= ['A', 'E', 'I', 'O', 'U','AA', 'EE', 'II', 'OO', 'UU','AAA', 'EEE', 'III', 'OOO', 'UUU','AAAA', 'EEEE', 'IIII', 'OOOO', 'UUUU','AAAAA', 'EEEEE', 'IIIII', 'OOOOO', 'UUUUU']

#     permutation=[]
#     for i in permutations(alpha,5):
#         if len(''.join(i))<=5:
#             permutation.append(''.join(i))
#     # print (permutation)

#     answer = 0
#     permutation.sort()
#     permutation.index(word)
#     return answer
ㅎ
from itertools import product   #중복순열로 푼다.
def solution(word):
    permutation=[]
    for j in range(1,6):   #길이 1~5개 있으니 반복
        for i in product(['A', 'E', 'I', 'O', 'U'], repeat=j):  #반복개수 지정하고 중복순열 구하기
            permutation.append(''.join(i))  # ''.join(list)로 list->string으로 변환
    # print(permutation)
    answer=0
    permutation.sort()  #사전이니까 sort()
    answer=permutation.index(word)+1
    return answer