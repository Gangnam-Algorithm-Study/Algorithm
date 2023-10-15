function solution(genres, plays) {
    let allSumGenres = {};

    genres.forEach((item, idx) => {
        allSumGenres[item] = allSumGenres[item] ? allSumGenres[item] + plays[idx] : plays[idx]
    });

    var dupDic = {};
    const results = genres
        .map((t, i) => ({ genre: t, count: plays[i], index: i }))
        .sort((a, b) => {
            if (a.genre !== b.genre) return allSumGenres[b.genre] - allSumGenres[a.genre];
            if (a.count !== b.count) return b.count - a.count;
            return a.index - b.index;
        })
        .filter(t => {
            if (dupDic[t.genre] >= 2) return false;
            dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
            return true;
        }).map((item) => {
            return item.index;
        })

    return results;
}