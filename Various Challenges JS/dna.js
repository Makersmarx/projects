// A === T && T === A

// C === G && G === C

// Swap letters as listed above and return dna str

const dnaStrand = (dna) => {
  return dna
    .split('')
    .map((str) => {
      switch (str) {
        case 'A':
          return 'T';
        case 'T':
          return 'A';
        case 'C':
          return 'G';
        case 'G':
          return 'C';
      }
    })
    .join('');
};

console.log(dnaStrand('ATTGCCATTG'));
console.log(dnaStrand('GTATTTATTA'));
