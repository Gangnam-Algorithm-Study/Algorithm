function solution(s) {
    let resultCount = 0;

    try {
        [...s].forEach(item => {
            item === '(' ? resultCount++ : resultCount--

            if (resultCount < 0) throw Error(false)
        })
    } catch (err) {
        return false;
    }

    return resultCount === 0 ? true : false
}