console.log("Fibonanci (Recursive)")
function fibonacciRecursive(angka: number): number {
    if (angka === 0) {
      return 0;
    }
    if (angka === 1) {
      return 1;
    }
    return fibonacciRecursive(angka - 1) + fibonacciRecursive(angka - 2);
  }
  
  const angka = 9; // Ubah nilai angka sesuai dengan keinginan
  const fibonacciNumber = fibonacciRecursive(angka);
  
  console.log(`Angka Fibonacci ke-${angka}: ${fibonacciNumber}`);
  