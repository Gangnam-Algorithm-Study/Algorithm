def solution(s):
    stack=[]
    for i in s: 
        if not stack and i==')':
            return False
        if i=='(':
            stack.append(')')
        else:
            if stack[-1]==i:
                stack.pop()
            else:
                return False
    if stack==[]:return True
    else:return False
