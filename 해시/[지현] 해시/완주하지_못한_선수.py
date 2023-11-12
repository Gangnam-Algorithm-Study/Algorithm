def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    for i in range(len(participant)):
        if i> len(completion)-1:
            answer=participant[i]
        elif participant[i] !=completion[i]:
            answer=participant[i]
            break

    return answer

# 값은 맞지만 효율성 테스트에서 시간초과 남
#def solution(participant, completion):
#     answer = ''
#     participant.sort()
#     completion.sort()
#     for i in participant:
#         if completion==[]:
#             answer=i
#             break
#         elif i !=completion[0]:
#             answer=i
#             break
#         else:
#             completion.pop(0)
#     return answer