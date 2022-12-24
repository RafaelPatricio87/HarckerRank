function squares(a, b) {
    // Write your code here
   let square = 0, i = 1, count = 0;
    while (square <= b) {
        square = i * i;
        if (square >= a && square <= b) {
            count += 1;
        }
        i += 1;
    }
    return count;
}
console.log(squares(3,9))