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
  //array de las posiciones que escoge el usuario
  arrowsPlayerArray:string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.obstaclesGame = [10];
    this.generateArray();
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

  setMovements(parameter: string): void {
    if(parameter == 'up'){
      this.playerOptions.push(this.cursorOfCells -= 8);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-up-arrow-square');
    }
    else if(parameter == 'left'){
      this.playerOptions.push(this.cursorOfCells -= 1);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-left-arrow-square');
    }
    else if(parameter == 'down'){
      this.playerOptions.push(this.cursorOfCells += 8);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-down-arrow-square');
    }
    else if(parameter == 'right'){
      this.playerOptions.push(this.cursorOfCells += 1);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-right-arrow-square');
    }
    console.log(this.arrowsPlayerArray);
  }

  verificatePosition(): boolean{
    return true;
  }

  start(): void{
    this.playerOptions = [2,3,4,5];
    console.log("entra");
  }

}
