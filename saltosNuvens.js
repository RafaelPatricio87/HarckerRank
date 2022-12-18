
function jumpingOnClouds(c, k) {
    let [i, energy] = [0, 100];
  while (true) {
    energy -= c[(i + k) % c.length] === 0 ? 1 : 3;
    if ((i + k) % c.length === 0) break;
    i += k;
  }
  return energy;
}
console.log(jumpingOnClouds([1, 1 ,1, 0, 1, 1, 0 ,0 ,0 ,0],3))