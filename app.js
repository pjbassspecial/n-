'use strict';
const n = process.argv[2];
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2);
    memo.set(n, value);
    return value;
}
console.log(trib(n));


