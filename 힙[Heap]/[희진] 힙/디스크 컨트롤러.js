class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length; // 힙의 크기 반환
  }

  push(value) {
    this.heap.push(value); // 힙에 값을 추가
    this.heapifyUp(this.heap.length - 1); // 추가한 값을 힙의 적절한 위치로 이동시킴
  }

  pop() {
    if (this.heap.length === 0) return null; // 힙이 비어있으면 null 반환
    if (this.heap.length === 1) return this.heap.pop(); // 힙에 하나만 있는 경우 해당 값을 반환하고 삭제

    const minValue = this.heap[0]; // 최소값 추출
    this.heap[0] = this.heap.pop(); // 힙의 마지막 값을 맨 위로 이동시킴
    this.heapifyDown(0); // 힙의 적절한 위치로 이동시킴

    return minValue; // 추출한 최소값 반환
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스 계산
      // 부모 노드보다 현재 노드의 값이 작으면 두 값을 교환하여 힙의 성질을 만족시킴
      if (this.heap[index][1] < this.heap[parentIndex][1]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex; // 현재 노드의 인덱스를 부모 노드의 인덱스로 업데이트
      } else {
        break; // 힙의 성질을 만족하면 종료
      }
    }
  }

  heapifyDown(index) {
    const leftChild = 2 * index + 1; // 왼쪽 자식 노드의 인덱스
    const rightChild = 2 * index + 2; // 오른쪽 자식 노드의 인덱스
    let smallest = index; // 현재 노드를 가장 작은 값으로 설정

    // 왼쪽 자식 노드가 힙의 범위 내에 있고, 왼쪽 자식의 값이 현재 값보다 작으면 가장 작은 값을 업데이트
    if (
      leftChild < this.heap.length &&
      this.heap[leftChild][1] < this.heap[smallest][1]
    ) {
      smallest = leftChild;
    }

    // 오른쪽 자식 노드가 힙의 범위 내에 있고, 오른쪽 자식의 값이 현재 값보다 작으면 가장 작은 값을 업데이트
    if (
      rightChild < this.heap.length &&
      this.heap[rightChild][1] < this.heap[smallest][1]
    ) {
      smallest = rightChild;
    }

    // 현재 값이 가장 작은 값과 다르면 두 값을 교환하고 재귀적으로 호출하여 힙의 성질을 만족시킴
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }
}

function solution(jobs) {
  const minHeap = new MinHeap(); // 최소 힙 생성
  const n = jobs.length; // 작업의 개수

  // 작업 요청 시간순으로 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  let currentTime = 0; // 현재 시간
  let totalTime = 0; // 총 소요시간

  let index = 0;
  while (index < n || minHeap.size() > 0) {
    // 현재 시간까지 요청된 작업을 모두 우선순위 큐에 추가
    while (index < n && jobs[index][0] <= currentTime) {
      minHeap.push(jobs[index++]);
    }

    // 대기 중인 작업이 없는 경우, 현재 시간을 다음 작업의 시작 시간으로 업데이트
    if (minHeap.size() === 0) {
      currentTime = jobs[index][0];
      continue;
    }

    // 가장 빨리 끝나는 작업을 꺼내서 수행
    const [requestTime, processingTime] = minHeap.pop();
    totalTime += currentTime - requestTime + processingTime;
    currentTime += processingTime;
  }

  // 평균 소요시간 계산
  const averageTime = Math.floor(totalTime / n);
  return averageTime;
}
