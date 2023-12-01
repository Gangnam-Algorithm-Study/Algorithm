// 지문 이해가 어려워 H-INDEX 개념에 대한 숙지가 가장 중요했음.

function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
