def solution(s):
    answer = True
    
    stack = ["0"]
    for i in s:
        if i == "(":
            stack.append("(")
        else:
            if stack[len(stack)-1] == "(":
                stack.pop()
            else:
                answer = False
                break
    if len(stack) != 1:
        answer = False
    return answer
