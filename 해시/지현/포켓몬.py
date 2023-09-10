def solution(nums):
    answer = 0
    count=len(nums)/2
    arr=[]
    for i in nums:
        if count<=0:
            break
        if i in arr:
            continue
        else:
            arr.append(i)
            count-=1
        
    answer= len(arr)
    
    return answer