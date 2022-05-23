import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.sass']
})
export class GameInterfaceComponent implements OnInit {

  numOfCells: number[] = [];
  //esta variable va a definir donde va a empezar el jugador
  initialState = 1;
  //esta variable va a ir recorriendo las celdas segun eleccion del jugador
  cursorOfCells = this.initialState;
  //arreglo para guardar el camino del jugador
  playerOptions: number[] = [];
  //arreglo para guardar los obstaculos
  obstaclesGame: number[] = [];


  constructor() { }

  ngOnInit(): void {
    this.obstaclesGame = [10, 16, 30];
    this.playerOptions = [1, 2, 3];
    this.generateArray();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {

    if (event.key == 'ArrowLeft') {
      this.cursorOfCells -= 1;
    }

    if (event.key == 'ArrowRight') {
      this.cursorOfCells += 1;
    }

    if (event.key == 'ArrowDown') {
      this.cursorOfCells += 8;
    }

    if (event.key == 'ArrowUp') {
      this.cursorOfCells -= 8;
    }
  }

  generateArray() {
    for (let index = 0; index < 64; index++) {
      this.numOfCells.push(index);
    }
  }


  checkOptionPlayer(): boolean {
    console.log(this.numOfCells.includes(5));
    for (let indexPlayerOptions = 0; indexPlayerOptions < this.playerOptions.length; indexPlayerOptions++) {
      if (this.numOfCells.includes(this.playerOptions[indexPlayerOptions])) {
        return true;
      }
    }
    return false;
  }

}
