function solution(genres, plays) {
  // 각 장르별로 노래를 저장할 Map과 총 재생 횟수를 저장할 Map
  const genreMap = new Map();
  const playMap = new Map();

  // 각 노래 정보를 Map에 추가하고 총 재생 횟수를 계산
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    // 만약 해당 장르가 Map에 없다면 초기화
    if (!genreMap.has(genre)) {
      genreMap.set(genre, []); // 해당 장르의 노래를 저장할 배열 초기화
      playMap.set(genre, 0); // 해당 장르의 총 재생 횟수 초기화
    }

    // 노래 정보를 해당 장르의 Map에 추가
    genreMap.get(genre).push({ id: i, play: play });
    // 해당 장르의 총 재생 횟수 업데이트
    playMap.set(genre, playMap.get(genre) + play);
  }

  // 총 재생 횟수를 기준으로 장르를 내림차순 정렬
  const sortedGenres = [...playMap.keys()].sort(
    (a, b) => playMap.get(b) - playMap.get(a)
  );

  const result = [];

  // 정렬된 장르별로 각 노래를 재생 횟수와 고유 번호를 기준으로 내림차순 정렬
  for (const genre of sortedGenres) {
    const genreSongs = genreMap.get(genre);
    genreSongs.sort((a, b) => {
      if (a.play !== b.play) {
        return b.play - a.play;
      } else {
        return a.id - b.id;
      }
    });

    // 각 장르별로 최대 2개의 노래만 선택하여 결과에 추가
    result.push(genreSongs[0].id);
    if (genreSongs.length > 1) {
      result.push(genreSongs[1].id);
    }
  }

  return result;
}
