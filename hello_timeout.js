const array = ['4311o', 'th3r3', 'w0r1d'];
let count = 3000;
for (const array1 of array) {
  setTimeout(() => {
    console.log(array1);
  }, count);
// the count must be outside of setTimeout to be effective
count += 1000;
}
