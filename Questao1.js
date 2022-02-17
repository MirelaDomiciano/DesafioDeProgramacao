/*Questão1*/

let vetor = [];
  function escada(n) {
      
      for (let i = 0; i < n; i++) {
          vetor.push(" ".repeat(n - i - 1) + "*".repeat(i + 1));
        
      }
      
      for (const n of vetor) {
          console.log(n);
      }
  }
let num = prompt('Digite um número');
escada(num);