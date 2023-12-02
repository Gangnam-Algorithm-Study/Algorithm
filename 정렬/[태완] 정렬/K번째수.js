// slice를 중점으로 사용하고, 구조분해할당으로 가져온 값을 넣었습니다.

function solution(array, commands) {
  const arr = [];
  for (let i = 0; i < commands.length; i++) {
    const [a, b, c] = commands[i];
    arr.push(array.slice(a - 1, b).sort((a, b) => a - b)[c - 1]);
  }
  return arr;
}
