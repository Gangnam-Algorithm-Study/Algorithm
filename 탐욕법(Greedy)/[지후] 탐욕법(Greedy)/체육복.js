function solution(n, lost, reserve) {
    let lostStudent = lost.filter(student => !reserve.includes(student)).sort();
    let reserveStudent = reserve.filter(student => !lost.includes(student)).sort();

    for (let i = 0; i < reserveStudent.length; i++) {
        if (lostStudent.includes(reserveStudent[i] - 1)) {
            lostStudent = lostStudent.filter(student => student !== reserveStudent[i] - 1);
        } else if (lostStudent.includes(reserveStudent[i] + 1)) {
            lostStudent = lostStudent.filter(student => student !== reserveStudent[i] + 1);
        }
    }

    return n - lostStudent.length;
}