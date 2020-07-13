function recFindEditDistance(P, T, i, j) {
    if (i === undefined || j === undefined) return recFindEditDistance(P, T, P.length - 1, T.length - 1);
    if (i === 0 && j === 0) return 0;
    if (i === 0) return j;
    if (j === 0) return i;

    var sub = recFindEditDistance(P, T, i-1, j-1) + (P[i]===T[j] ? 0 : 1);
    var del = recFindEditDistance(P, T, i, j-1) + 1;
    var add = recFindEditDistance(P, T, i-1, j) + 1;

    return Math.min(sub, add, del);
};

console.log(recFindEditDistance('ffadsfsadfasf', 'asdfasdf'));
