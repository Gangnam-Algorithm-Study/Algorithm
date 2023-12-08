function solution(array, commands) {
  // map함수를 사용하여  commands 배열의 각 요소에 대해 함수를 호출하고 그 결과를 모아서 새로운 배열을 만듬

  // slice 함수로  배열의 일부분을 추출

  // sort 함수로 배열을 오름차순으로 정렬

  return commands.map(
    (command) =>
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
      command[2] - 1
      ]
  );
}
