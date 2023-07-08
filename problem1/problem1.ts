console.log("Program Prima Ke X")

function angakPrima(angka: number): boolean {
    if (angka <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function mencariAngkaPrima(x: number): number {
    let hitung = 0;
    let bantu = 2;
  
    while (hitung < x) {
      if (angakPrima(bantu)) {
        hitung++;
      }
  
      bantu++;
    }
  
    return bantu - 1;
  }
  
  const x = 3; // Ubah angka x sesuai dengan keinginan
  const primeNumber = mencariAngkaPrima(x);
  
  console.log(`Bilangan prima ke-${x}: ${primeNumber}`);