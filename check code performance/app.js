console.time("looper");
let i = 0;
while (i < 1000) {
  i++;
}
console.log('%cCode Performance:','color:orange; font-weight:bold');
console.timeEnd("looper");
