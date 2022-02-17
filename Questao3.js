/*Questão3*/

function anagrama(palavra){
    let contador = 0;
    let vari;
    let vetor = [];
    for(let i = 0; i < palavra.length; i++) {
                if(palavra.indexOf(palavra[i]) !== i) { 
                  vari = palavra[i];
             
                    if(vetor.indexOf(vari) == -1) { 
                        vetor.push(vari);
                        contador = contador + 1;
          
         }
            
        }
    
}
    console.log(contador);
}  

let plv = [];
plv =  prompt('Digite uma palavra');
anagrama(plv);

/*Infelizmente não consegui solucionar essa questão completa, consegui somente que o programa identificasse letras repetidas e mostrasse quantas são as que se repetem, espero que considere um pouco.*/