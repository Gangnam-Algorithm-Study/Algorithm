function solution(clothes) {
  // 각 의상의 종류별로 개수를 세어 clothesMap에 저장
  const clothesMap = clothes.reduce((acc, [, type]) => {
    // clothesMap에 해당 종류의 의상이 이미 존재한다면 개수를 1 증가, 아니면 1로 초기화
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  // 조합 계산
  let answer = 1;
  for (const type in clothesMap) {
    // 해당 종류의 의상을 입지 않는 경우도 포함하기 위해 개수에 1추가
    answer *= clothesMap[type] + 1;
  }

  // 아무것도 입지 않은 경우 제외
  return answer - 1;
}
