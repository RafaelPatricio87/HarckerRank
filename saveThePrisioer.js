function saveThePrisioner(n,m,s) {
    return (m - 1 + s) % n || n
}
console.log(saveThePrisioner(4,6,2))