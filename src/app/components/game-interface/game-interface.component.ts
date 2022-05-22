import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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

}
