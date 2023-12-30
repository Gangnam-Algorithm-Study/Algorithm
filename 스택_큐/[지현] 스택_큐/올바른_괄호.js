function solution(s) {
    let answer = true;
    let arr = s.split("");
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "(") {
            stack.push(")");
        } else {
            if (stack.length == 0) {
                answer = false;
                break;
            } else {
                stack.pop();
            }
        }
    }

    if (stack.length > 0) {
        answer = false;
    }
    return answer;
}
