let score = JSON.parse(localStorage.getItem('score')) || {
        Wins: 0,
        Loses: 0,
        tie: 0
      };

      updateScoreElement();

    function gamePlay(playerMove){
      const computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'Scissors'){
        if (computerMove === 'Scissors'){
          result = 'Tie.';
        } else if (computerMove === 'Rock'){
          result = 'You Lose.';
        } else if(computerMove === 'Paper'){
          result = 'You Win.';
        }
      } else if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
          result = 'Tie.';
        } else if (computerMove === 'Paper'){
          result = 'You Lose.';
        } else if(computerMove === 'Scissors'){
          result = 'You Win.';
        }
      } else if (playerMove === 'Paper'){
        if (computerMove === 'Paper'){
          result = 'Tie';
        } else if (computerMove === 'Scissors'){
          result = 'You Lose.';
        } else if(computerMove === 'Rock'){
          result = 'You Win.';
        }
      }

  if (result === 'You Win.'){
    score.Wins += 1;
  }
  else if( result ==='You Lose.')
  {
    score.Loses +=1;
  }    else if (result === 'Tie.')
  {
    score.tie += 1;
  }

  

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You
    <img class="move-icon" src="${playerMove}-emoji.png">
    <img class="move-icon" src="${computerMove}-emoji.png">
    Computer`
}

    function updateScoreElement() {
      document.querySelector('.js-score')
     .innerHTML = `Wins : ${score.Wins} Loses: ${score.Loses} Ties: ${score.tie}`;
    }


    function pickComputerMove(){
    randomnumber = Math.random();
       let computerMove = '';
      if (randomnumber >= 0 && randomnumber < 1 / 3)
      {
        computerMove = 'Rock';
      } 
      else if(randomnumber >= 1 / 3 && randomnumber < 2 / 3)
      {
        computerMove = 'Paper';
      } 
      else if(randomnumber >= 2 / 3 && randomnumber < 1) 
      {
      computerMove = 'Scissors';
      }
      console.log(computerMove);

      return computerMove;
        }
   
