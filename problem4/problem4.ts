console.log("Program Total Maksimum dari deret bilangan")
function findMaximumTotal(angka1: number[]): number {
    let maximumTotal = 0;
  
    for (let i = 0; i < angka1.length; i++) {
      if (angka1[i] > maximumTotal) {
        maximumTotal = angka1[i];
      }
    }
  
    return maximumTotal;
  }
  
  const angka1: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Ganti dengan deret bilangan sesuai keinginan
  
  const maximumTotal = findMaximumTotal(angka1);
  
  console.log("Total maksimum dari deret bilangan:", maximumTotal);
  