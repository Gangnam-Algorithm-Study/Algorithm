function solution(genres, plays) {
    let answer = [];
    let arrangedObj = {}; //장르마다 정리할 object
    let genresPlaysSum = []; //장르별 재생수 합한 배열
    for (let i = 0; i < genres.length; i++) {
        //genresPlaysSum 정리
        for (let j = 0; j <= genresPlaysSum.length; j++) {
            if (j == genresPlaysSum.length) {
                genresPlaysSum.push([genres[i], plays[i]]);
                break;
            } else {
                if (genresPlaysSum[j][0] == genres[i]) {
                    genresPlaysSum[j][1] += plays[i];
                    break;
                }
            }
        }
        //arrangedObj 정리
        if (genres[i] in arrangedObj) {
            arrangedObj[genres[i]].push([plays[i], i]);
        } else {
            arrangedObj[genres[i]] = [[plays[i], i]];
        }
        arrangedObj[genres[i]].sort((a, b) => b[0] - a[0]);
    }
    console.log(arrangedObj);
    console.log(genresPlaysSum);

    genresPlaysSum.sort((a, b) => b[1] - a[1]); //장르마다 플레이 수 기준으로 내림차순 정리 ->많이재생된 장르가 앞으로 오도록

    genresPlaysSum.forEach((el, idx) => {
        //많이 재생된 순으로 장르 순회하면서 조건에 맞게 answer에 추가
        if (arrangedObj[el[0]].length == 1) {
            answer.push(arrangedObj[el[0]][0][1]);
        } else {
            answer.push(arrangedObj[el[0]][0][1]);
            answer.push(arrangedObj[el[0]][1][1]);
        }
    });
    console.log(arrangedObj, genresPlaysSum);
    return answer;
}
