// jogo de pedra, papel e tesoura.

jogador1 = "papel" 
// ou pedra ou tesoura
jogador2 = "tesoura" 
// ou papel ou tesoura


if (jogador1 === jogador2){
    console.log('Empate')
}
else if (jogador1 ===  'papel' && jogador2 === 'pedra') {
    console.log('Jogador 1 ganhou')
}
else if (jogador1 === 'pedra' && jogador2 === 'tesoura') {
    console.log('Jogador 1 ganhou');
} 
else if (jogador1 ===  'tesoura' && jogador2 === 'papel') {
    console.log('Jogador 1 ganhou');
} 
else 
    console.log('Jogador 2 ganhou')


    