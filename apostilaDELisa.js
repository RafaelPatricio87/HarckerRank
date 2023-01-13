function lisaWorkbook(n, k, arr) {
    let [page, special] = [0, 0];
    arr.forEach((problems) => {
      for (let problem = 1; problem <= problems; problem++) {
        if (problem === 1 || k === 1 || problem % k === 1) page++;
        if (problem === page) special++;
      }
    });
    return special;
}
    console.log(lisaWorkbook(5, 3, [4, 2, 6, 1, 10]))