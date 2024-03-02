function solution(scoville, K) {
    let count = 0;
    const heap = [null];

    // MinHeap의 insert 함수를 이동하여 작성
    function insert(node) {
        heap.push(node);

        if (heap.length > 1) {
            let current = heap.length - 1;

            while (
                current > 1 &&
                heap[Math.floor(current / 2)] > heap[current]
            ) {
                [heap[Math.floor(current / 2)], heap[current]] = [
                    heap[current],
                    heap[Math.floor(current / 2)],
                ];
                current = Math.floor(current / 2);
            }
        }
    }

    // MinHeap의 remove 함수를 이동하여 작성
    function remove() {
        let smallest = heap[1];

        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);

            if (heap.length === 3) {
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return smallest;
            }

            let current = 1;
            let leftChildIndex = current * 2;
            let rightChildIndex = current * 2 + 1;

            while (
                heap[leftChildIndex] &&
                heap[rightChildIndex] &&
                (heap[current] > heap[leftChildIndex] ||
                    heap[current] > heap[rightChildIndex])
            ) {
                if (heap[leftChildIndex] < heap[rightChildIndex]) {
                    [heap[current], heap[leftChildIndex]] = [
                        heap[leftChildIndex],
                        heap[current],
                    ];
                    current = leftChildIndex;
                } else {
                    [heap[current], heap[rightChildIndex]] = [
                        heap[rightChildIndex],
                        heap[current],
                    ];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        } else if (heap.length === 2) {
            heap.splice(1);
        } else {
            return null;
        }

        return smallest;
    }

    // 초기 배열을 heap에 삽입
    scoville.forEach(food => insert(food));

    // heap의 최소값이 K보다 작은 동안 반복
    while (heap[1] < K) {
        if (heap.length < 3) {
            return -1;
        }

        // 최소값 두 개를 꺼내서 섞은 후 다시 삽입
        insert(remove() + remove() * 2);
        count += 1;
    }

    return count;
}
