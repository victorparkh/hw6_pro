index = 250;
sum = 0;

primeNumber: for (i = 2; i <= index; i++) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) continue primeNumber;
  }

  console.log(i);
  sum += i;
}

console.log(sum);
