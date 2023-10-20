from itertools import permutations

def solution(numbers):
    answer=0
    # arr=numbers.split()
    numbersList=list(numbers)#numbers라는 문자열을 list 형태로
    permutationList=[] #순열 만들거임
    for i in range(1,len(numbersList)+1): #문자 길이 다양한 것 고려한 for
        for j in permutations(numbersList,i): #permutation반복해서 각각 append
            permutationList.append(j)

    # print(numbersList)
    # print(permutationList)
    answerlist=[]
    for i in permutationList:
        number=int(''.join(i))  #tuple 형태를 콤마 빼고 str 형태로 바꾼 후 int변환
        print(number)
        result=0
        if number==1 or number==0: #0,1 소수 아니기에 예외처리
            continue
        else:
            for j in range(2,int(number**(1/2)+1)):
                if number%j == 0:
                    result= -1
                    break
            if result==0:
                if number in answerlist:
                    continue
                else:
                    answerlist.append(number)
    
    print(answerlist)
    return len(answerlist)

print(solution('011'))