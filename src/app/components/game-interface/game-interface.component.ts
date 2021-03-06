import { Component, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-game-interface',
  templateUrl: './game-interface.component.html',
  styleUrls: ['./game-interface.component.sass']
})
export class GameInterfaceComponent implements OnInit {

  numOfCells: number[] = [];
  //esta variable va a definir donde va a empezar el jugador
  initialState = 0;
  //esta variable va a ir recorriendo las celdas segun eleccion del jugador
  cursorOfCells = this.initialState;
  //arreglo para guardar el camino del jugador
  playerOptions: number[] = [];
  //arreglo para guardar los obstaculos
  obstaclesGame: number[] = [];
  //array de las posiciones que escoge el usuario
  arrowsPlayerArray: string[] = [];
  //indica cual va a ser la celda ganadora
  goal: number = 0;
  //indica el nivel en el que se encuentra
  level_counter: number;
  //array temporal
  temp_array: number[] = [];
  //para pasar la calificacion a otro componente
  //array para guardar la calificacion del usuario
  @Output() calification: number[];


  constructor(private router: Router) {
    this.level_counter = 1;
    this.calification = [];
  }

  ngOnInit(): void {
    this.generateArray();
  }


  generateArray() {
    for (let index = 0; index < 64; index++) {
      this.numOfCells.push(index);
    }
    this.setLevels();
  }

  //este metodo se usa para validar el movimiento del jugador
  async checkOptionPlayer() {
    for (let index = 0; index < this.temp_array.length; index++) {
      this.cursorOfCells = this.temp_array[index];
      this.validatePosition();
      this.playerOptions.push(this.cursorOfCells);
      await this.delay(1250);
    }
  }

  validatePosition() {
    if (this.obstaclesGame.includes(this.cursorOfCells)) {
      this.swalErrorMessage('Has caido en una trampa');
      this.calification.push(0);
      this.level_counter += 1;
      if (this.level_counter > 5) {
        const queryParams: any = {};
        queryParams.myArray = JSON.stringify(this.calification);
        const navigationExtras: NavigationExtras = {
          queryParams
        };
        this.router.navigate(['/survey'], navigationExtras);
      }
      this.setLevels();
    } else if (this.cursorOfCells == this.goal) {
      this.swalSuccessMessage('Has pasado al siguiente nivel');
      this.calification.push(1);
      this.level_counter += 1;
      if (this.level_counter > 5) {
        const queryParams: any = {};
        queryParams.myArray = JSON.stringify(this.calification);
        const navigationExtras: NavigationExtras = {
          queryParams
        };
        this.router.navigate(['/survey'], navigationExtras);
      }
      this.setLevels();
    } else if (this.cursorOfCells == this.temp_array[this.temp_array.length - 1] && this.cursorOfCells != this.goal) {
      this.swalErrorMessage('No has llegado a la meta');
      this.calification.push(0);
      this.level_counter += 1;
      if (this.level_counter > 5) {
        const queryParams: any = {};
        queryParams.myArray = JSON.stringify(this.calification);
        const navigationExtras: NavigationExtras = {
          queryParams
        };
        this.router.navigate(['/survey'], navigationExtras);
      }
      this.setLevels();
    }
  }

  swalErrorMessage(textMessage: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: textMessage,
    });
  }

  swalSuccessMessage(textMessage: string) {
    Swal.fire({
      icon: 'success',
      title: 'Muy Bien',
      text: textMessage,
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setMovements(parameter: string): void {
    if (parameter == 'up') {
      this.temp_array.push(this.cursorOfCells -= 8);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-up-arrow-square');
    }
    else if (parameter == 'left') {
      this.temp_array.push(this.cursorOfCells -= 1);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-left-arrow-square');
    }
    else if (parameter == 'down') {
      this.temp_array.push(this.cursorOfCells += 8);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-down-arrow-square');
    }
    else if (parameter == 'right') {
      this.temp_array.push(this.cursorOfCells += 1);
      this.arrowsPlayerArray.push('arrow-selected bx bxs-right-arrow-square');
    }
  }

  start(): void {
    this.checkOptionPlayer();
  }

  undoMovement() {
    this.arrowsPlayerArray.pop();
  }

  setLevels() {
    this.playerOptions = [];
    this.arrowsPlayerArray = [];
    this.temp_array = [];

    if (this.level_counter == 1) {
      this.initialState = 25;
      this.cursorOfCells = this.initialState;
      this.goal = 30;
      this.obstaclesGame = [16, 17, 18, 19, 20, 21, 22, 23, 32, 33, 34, 35, 36, 37, 38, 39, 24, 31];
    }
    if (this.level_counter == 2) {
      this.initialState = 9;
      this.cursorOfCells = this.initialState;
      this.goal = 37;
      this.obstaclesGame = [16, 19, 22, 33, 52, 7, 48, 56, 0, 39, 63, 60, 12, 29];
      console.log(this.playerOptions);
    }
    if (this.level_counter == 3) {
      this.initialState = 54;
      this.cursorOfCells = this.initialState;
      this.goal = 32;
      this.obstaclesGame = [60, 52, 44, 36, 18, 26, 34, 10, 5, 13];
    }
    if (this.level_counter == 4) {
      this.initialState = 9;
      this.cursorOfCells = this.initialState;
      this.goal = 32;
      this.obstaclesGame = [16, 17, 18, 26, 34, 27, 28, 36, 44, 38, 39, 60, 50, 48, 56, 6, 7, 13, 14, 54];
    }
    if (this.level_counter == 5) {
      this.initialState = 34;
      this.cursorOfCells = this.initialState;
      this.goal = 37;
      this.obstaclesGame = [35, 36, 28, 27, 43, 51, 20, 12, 29, 30, 45, 46, 41, 42, 26, 25, 8, 9, 56, 57, 62, 63, 61, 6, 7, 2, 0, 1];
    }
  }
}
