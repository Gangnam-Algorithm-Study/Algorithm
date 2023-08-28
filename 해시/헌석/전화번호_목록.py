


def solution(phone_book):
    answer = True
    phone_book.sort(key = lambda x: len(x))

    phone_dict = dict()

    for num in phone_book:
        for i in range(len(num)):
            if num[:i+1] in phone_dict:
                answer = False
        phone_dict[num] = 1

    return answer

print(solution(["12","123","1235","567","88"]))