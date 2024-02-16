function solution(n, costs) {
    let result = 0;
    let parent = [];
    for (let i = 0; i < n; i++) {
        parent.push(i);
    }
    // 2차원배열 정렬
    costs.sort((a, b) => {
        return a[2] - b[2];
    })
    let count = 0;
    for (let i = 0; i < costs.length; i++) {
        let a = find(parent, costs[i][0]);
        let b = find(parent, costs[i][1]);
        let l = costs[i][2];
        if (a != b) {
            if (a < b) {
                parent[b] = a;
            } else {
                parent[a] = b;
            }
            count++;
            result += l;
        }
        if (count === n - 1) {
            break;
        }
    }


    return result;
}

function find(parent, a) {
    if (parent[a] === a) {
        return a;
    }
    return parent[a] = find(parent, parent[a]);
}