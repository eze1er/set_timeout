const sentence = "hello there from lighthouse labs\n";
let count = 3000;

  // print the char here
  for (const char of sentence) {
setTimeout(() => {
  process.stdout.write(char);
  }, count);
count += Math.random() * 100;
} // <= 1s delay to make it noticeable. Can dial it down later.
