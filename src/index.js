module.exports = function reverse (n) {
    if (n < 0) {n = -n};
    let a = n.toString();
    let l = a.split('');
    let e = l.reverse();
    let x = e.join('');
    return x;
}
