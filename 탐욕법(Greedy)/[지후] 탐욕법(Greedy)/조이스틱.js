function solution(name) {
    let result = 0;
    const min = "A".charCodeAt();
    const max = "Z".charCodeAt() + 1;

    const chars = [...name].map((char) => {
        const findCode = char.charCodeAt();
        return Math.min(findCode - min, max - findCode);
    });

    let minMove = chars.length - 1;

    chars.forEach((char, idx) => {
        result += char;

        let cursor = idx + 1;
        while (cursor < chars.length && chars[cursor] === 0) cursor++;

        minMove = Math.min(minMove,
            (idx * 2) + chars.length - cursor,
            idx + 2 * (chars.length - cursor));
    })

    return result + minMove;
}