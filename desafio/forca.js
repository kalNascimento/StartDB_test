/****************************************************/
/*                                                  */
/*       Teste técnico da seleção do StartDB        */
/*       dev by Kalebe Nascimento                   */
/*                                                  */
/****************************************************/

let vidasRestantes = 6;
let letrasChutadas = [];
let palavraCerta = [];
let palavraStatus = [];

class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta

    for(let i = 0; i < this.palavraSecreta.length; i++){
      palavraStatus.push('_')
    }
    for(let i = 0; i < this.palavraSecreta.length; i++){
      palavraCerta.push(this.palavraSecreta[i])
    }
  }

  chutar(letra) {
    if(letra.length === 1){
      testarLetras(letra)
      for(let i = 0; i < palavraStatus.length; i++){
        if(letra === palavraCerta[i]){
          palavraStatus.splice(i, 1, letra)
        }
      }
    } else {
      console.log('Apenas uma letra de cada vez')
    }
  }

  buscarEstado() { 
    let statusPlayer;

    let testePalavra = palavraStatus.every((palavra) => {
      return palavra !== '_';
    });

    if(vidasRestantes <= 0){
      statusPlayer = 'perdeu';
    } else if(testePalavra === true) {
      statusPlayer = 'ganhou';
    } else {
      statusPlayer = 'aguardando chute'
    }

    return statusPlayer; 
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: letrasChutadas,
          vidas: vidasRestantes,
          palavra: palavraStatus
      }
  }
}

function testarLetras(letraChutada) {
  let testeLetraChutada = letrasChutadas.every((letrasJaChutadas) => {
    return letraChutada !== letrasJaChutadas;
  });

  if(testeLetraChutada === true){
    letrasChutadas.push(letraChutada)

    let testePalavra = palavraCerta.every((palavraCerta) => {
      return letraChutada !== palavraCerta;
    });

    if(testePalavra === true){
      vidasRestantes = vidasRestantes - 1;
    }
  }
}

module.exports = Forca;
