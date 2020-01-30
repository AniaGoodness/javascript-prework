{
  const rock = document.getElementById('playRock');
	const	paper = document.getElementById('playPaper');
	const	scissors = document.getElementById('playScissors');

  function printMessage(msg){
  	var div = document.createElement('div');
  	div.innerHTML = msg;
  	document.getElementById('messages').appendChild(div);
  }

  function clearMessages(){
  	document.getElementById('messages').innerHTML = '';
  }

  function playGame(playerInput){
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let argPlayerMove = getMoveName(playerInput);
    let argComputerMove = getMoveName(randomNumber);
    displayResult(argPlayerMove, argComputerMove);
  }

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + randomNumber + '.');
      return 'nieznany ruch';
      }
  }



  /*function buttonClicked(playerInput){
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
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Wybrałeś' + playerInput)
  console.log('Gracz wpisał: ' + playerInput);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let argComputerMove = getMoveName(randomNumber);
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('moves:', argComputerMove, argPlayerMove); */

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
    rock.addEventListener('click',function(){
    playGame(1);
		});
	paper.addEventListener('click',function(){
		playGame(2);
		});
	scissors.addEventListener('click',function(){
		playGame(3);
		});
}
