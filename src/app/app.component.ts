import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players = [];
  nbPlayers = 3;
  step = 0;
  nbRound = 1;

  nbPlayerValidate() {
    console.log('startParty with ' + this.nbPlayers + ' players');
    for (let i = 0; i < this.nbPlayers; i++) {
      this.players.push({name: '', currentScore: 0, scoreTotal: 0});
    }
    this.step++;
  }

  startParty() {
    const list = this.players.map(player => player.name + ' ');
    console.log('startParty with ' + list);
    this.step++;
  }

  getTotalCurrentScores() {
    return this.players.reduce((prev, currPl) => prev + currPl.currentScore, 0);
  }

  validateRound() {
    if (this.getTotalCurrentScores() === 250) {
      this.players.forEach(pl => {
        pl.scoreTotal += pl.currentScore;
        pl.currentScore = 0;
      });
      if (this.nbRound >= this.players.length) {
        this.players.sort((pl1, pl2) => pl1.scoreTotal - pl2.scoreTotal);
        this.step++;
      } else {
        this.nbRound++;
      }
    }
  }

  restart() {
    this.players = [];
    this.nbPlayers = 3;
    this.step = 0;
    this.nbRound = 1;
  }
}
