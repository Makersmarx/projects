  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('invalid choice');
    };
  };

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        console.log('invalid choice');
        break;
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Its a tie';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'computer wins';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'computer wins';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'computer wins';
    } else {
      return 'your the winner';
    }
  }

  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You picked: ' + userChoice);
    console.log('The computer picked: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
  };

  playGame();