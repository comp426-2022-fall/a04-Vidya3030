export function roll(sides, dice, rolls) {
    const array = [];
    var sum = 0;
    for (let i = 0; i < rolls; i++) {
        sum = 0;
        for (let j = 0; j < dice; j++) {
            sum += 1+ Math.floor(Math.random()*sides);
        }
        array.push(sum);
    }
    const output = {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": array
    }
    return JSON.stringify(array);
}