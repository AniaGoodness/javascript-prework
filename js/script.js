function playGame(){

  function buttonClicked(playerInput){
    printMessage('Dokonałeś wyboru');
    let playerInput;

    if (playerInput == playRock){
      playGame('kamień')
    } else if (playerInput == playPaper) {
      playGame('papier')
    } else {
      playGame('nożyce')
    }
  }

    playerInput.addEventListener('click', playGame);

  /*let argPlayerMove = getMoveName(playerInput);
    printMessage('Wybrałeś' + playerInput)

  console.log('Gracz wpisał: ' + playerInput);*/

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

  /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/




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

    let buttons = document.getElementById(playRock, playPaper, playScissors);
    playRock.addEventListener('click', Kamień);
    playPaper.addEventListener('click', Papier);
    playScissors.addEventListener('click', Nożyce);
}
playGame()
