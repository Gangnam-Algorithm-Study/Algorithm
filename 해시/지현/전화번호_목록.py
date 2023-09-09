def solution(phone_book):
    #문자열 기준으로 정렬 + 다음거랑 비교
    phone_book.sort()

    for i in range(len(phone_book)-1):
        length= len(phone_book[i])
        if len(phone_book[i])<=len(phone_book[i+1]):       
            if phone_book[i+1][0:length]==phone_book[i]:
                return False
    return True