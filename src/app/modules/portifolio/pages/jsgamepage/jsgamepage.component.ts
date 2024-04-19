import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-jsgamepage',
  templateUrl: './jsgamepage.component.html',
  styleUrls: ['./jsgamepage.component.scss']
})
export class JsgamepageComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit() {
    const btnNewGame = this.elementRef.nativeElement.querySelector('.btn--new');
    const btnDice = this.elementRef.nativeElement.querySelector('.btn--roll')
    const btnHold = this.elementRef.nativeElement.querySelector('.btn--hold')  
    const players =  this.elementRef.nativeElement.querySelectorAll('.player')
    let diceImage = this.elementRef.nativeElement.querySelector('.dice')
    let activePlayer = 0

    btnHold.disabled = true;
    btnDice.disabled = true;
    console.log('btnNewGame', btnNewGame);

    btnNewGame.addEventListener('click', function(){
      diceImage.classList.add('hidden')
      btnHold.disabled = false;
      btnDice.disabled = false;
      for(let i = 0; i <players.length ; i++){
          players[i].querySelector('.score').textContent = 0
          players[i].querySelector('.current-score').textContent = 0
          players[i].classList.remove('player--winner')
      }
  })

  function changePlayer(activePlayer: number){
    if(activePlayer === 0){
      return 1;
    } else if(activePlayer === 1){
      return 0;
    }
    return activePlayer
  }

  btnDice.addEventListener('click', function(){
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden')
    diceImage.src = `../../../../../assets/img/dice/dice-${String(diceNumber)}.png`
    if(Number(diceNumber) === 1){
        players[activePlayer].querySelector('.current-score').textContent = 0
        players[activePlayer].classList.remove('player--active')
        activePlayer = changePlayer(activePlayer)
        players[activePlayer].classList.add('player--active')
    } else{
        const scoreNow = players[activePlayer].querySelector('.current-score').textContent
        const newScore = Number(scoreNow) + Number(diceNumber)
        players[activePlayer].querySelector('.current-score').textContent = newScore
    }
  })

  btnHold.addEventListener('click', function(){
    const scoreTotalNow = players[activePlayer].querySelector('.score').textContent
    const currentTotalNow = players[activePlayer].querySelector('.current-score').textContent
    players[activePlayer].querySelector('.score').textContent = Number(currentTotalNow) + Number(scoreTotalNow)

    if(Number(players[activePlayer].querySelector('.score').textContent) >= 30 ){
        players[activePlayer].classList.add('player--winner')
        btnHold.disabled = true;
        btnDice.disabled = true;
        diceImage.classList.add('hidden')

    } else{
        players[activePlayer].querySelector('.current-score').textContent = 0
        players[activePlayer].classList.remove('player--active')
        activePlayer = changePlayer(activePlayer)
        players[activePlayer].classList.add('player--active')
    }
  })
  }
}
