let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(randomNumber, playerInput){
  if(randomNumber == 1){
    return 'kamień';
  } else if(randomNumber == 2){
    return 'papier';
  } else if(randomNumber == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
  }
}

let argComputerMove = getMoveName(randomNumber);


/* if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';

} */
//printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

 /* if(playerInput == '1'){
  argPlayerMove = 'kamień';
}
else if(playerInput == '2'){
  argPlayerMove = 'papier';
}
else if(playerInput == '3'){
  argPlayerMove = 'nożyce';
}
*/

//printMessage('Twój ruch to: ' + argPlayerMove);

//wynik
/*
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else if(computerMove == playerMove ){
  printMessage('Remis!');
}
else if(computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ty przegrywasz!');
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
else if ( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrywasz!');
}
else if ( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ty przegrywasz!');
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
else {
  printMessage('Możesz wybrać tylko 1, 2 lub 3')
}
*/
console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
      else if(argComputerMove == argPlayerMove ){
        printMessage('Remis!');
      }
      else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz!');
      }
      else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
      else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz!');
      }
      else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz!');
      }
      else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      else {
        printMessage('Możesz wybrać tylko 1, 2 lub 3')
      }
    }
let result1 = displayResult(argComputerMove, argPlayerMove);
