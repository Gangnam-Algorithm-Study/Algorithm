class MinHeap {
  constructor() {
    this.heap = []; // 최소 힙을 나타내는 배열
  }

  size() {
    return this.heap.length; // 힙의 크기 반환
  }

  // 값을 넣되, 오름차 순 정렬함
  push(value) {
    this.heap.push(value); // 배열에 값을 추가
    let currentIndex = this.heap.length - 1; // 새로 추가된 값의 인덱스

    // 힙의 성질을 만족하도록 정렬
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]
    ) {
      // 부모 노드와 값 비교하여 정렬
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[Math.floor((currentIndex - 1) / 2)];
      this.heap[Math.floor((currentIndex - 1) / 2)] = temp;
      currentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // 값을 빼되, 오름차 순 정렬 함
  pop() {
    if (this.heap.length === 0) return null; // 힙이 비어있으면 null 반환
    if (this.heap.length === 1) return this.heap.pop(); // 힙에 하나만 있는 경우 해당 값을 반환하고 삭제

    const minValue = this.heap[0]; // 최소값 추출
    this.heap[0] = this.heap.pop(); // 힙의 마지막 값을 맨 위로 이동시킴
    let currentIndex = 0; // 현재 인덱스

    // 힙의 성질을 만족하도록 정렬
    while (currentIndex * 2 + 1 < this.heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < this.heap.length &&
        this.heap[currentIndex * 2 + 2] < this.heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (this.heap[currentIndex] < this.heap[minChildIndex]) {
        break;
      }

      // 현재 노드와 자식 노드의 값을 비교하여 정렬
      const temp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      currentIndex = minChildIndex;
    }

    return minValue; // 추출한 최소값 반환
  }

  // 가장 작은 값을 반환 (삭제하지 않고)
  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap(); // 최소 힙 생성

  // 주어진 scoville 배열의 모든 값을 최소 힙에 추가
  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0; // 섞은 횟수 초기화

  // 최소 힙의 크기가 2 이상이고, 가장 작은 값이 K 미만인 경우 반복
  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    // 가장 작은 두 값을 추출하여 새로운 음식의 스코빌 지수 계산 후 힙에 추가
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++; // 섞은 횟수 증가
  }

  // 최소 힙의 가장 작은 값이 K 이상이면 섞은 횟수 반환, 그렇지 않으면 -1 반환
  return minHeap.peek() >= K ? mixedCount : -1;
}
