/*Questão2*/

let s = prompt('Digite uma senha');

  function contagem(senha) {
      let contador = 0;
      if(senha.length >= 6){
        console.log('Senha adequada');
      }
      else{
        contador = 6 - senha.length;
        console.log('Insira mais '+contador+' caracteres');
      }
  }

contagem(s);