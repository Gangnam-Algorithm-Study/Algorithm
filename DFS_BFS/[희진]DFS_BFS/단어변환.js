function solution(begin, target, words) {
  // BFS를 위한 큐 초기화
  const queue = [{ word: begin, step: 0 }];

  while (queue.length > 0) {
    const { word, step } = queue.shift();

    // target에 도달한 경우 최소 단계 반환
    if (word === target) {
      return step;
    }

    // words에서 현재 단어와 한 글자만 차이나는 단어를 찾아 큐에 추가
    for (let i = 0; i < words.length; i++) {
      if (wordCheck(word, words[i])) {
        // 새로운 단어와 변환된 단계 수를 큐에 추가
        queue.push({ word: words[i], step: step + 1 });
        // 중복 방지를 위해 words에서 해당 단어를 삭제
        words.splice(i, 1);
        i--; // 배열이 변경되었으므로 인덱스 조정
      }
    }
  }

  // target에 도달하지 못한 경우
  return 0;
}

// 두 단어가 한 글자만 차이나는지 확인하는 함수
const wordCheck = (word1, word2) => {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 1) {
        return false; // 한 글자 이상 차이가 나면 false 반환
      }
    }
  }
  return diffCount === 1; // 정확히 한 글자 차이인 경우 true 반환
};
