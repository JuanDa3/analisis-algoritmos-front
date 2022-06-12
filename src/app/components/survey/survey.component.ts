import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SendSurveyService } from './send-survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {

  calification: Array<number>;
  valueOfSurvey: string;
  optionsSurvey: number[] = [0, 1, 2, 3, 4, 5]
  questionList: string[] = [
    '¿Que tan divertido le parecio el juego?',
    '¿Que tan dificil le parecio el juego?',
    '¿Que tanto recomendaria el juego?'
  ];
  question1: number = 0;
  question2: number = 0;
  question3: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private sendSurveyService: SendSurveyService, private router: Router) {
    this.valueOfSurvey = '';
    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    // If the value is null, create a new array and store it
    // Else parse the JSON string we sent into an array
    if (myArray === null) {
      this.calification = new Array<number>();
    } else {
      this.calification = JSON.parse(myArray);
    }
  }

  ngOnInit(): void {
    console.log(this.calification);
  }

  async modal_welcome() {
    const { value: formValues } = await Swal.fire({
      title: 'Ingrese su nombre',
      html:
        '<input id="swal-input1" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        "cualquier cosa"
      }
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

  form = new FormGroup({
    food: new FormControl('', Validators.required),
  });

  getListQuestionValues1(option: any): void {
    this.question1 = option;
    console.log(this.question1);
  }

  getListQuestionValues2(option: any): void {
    this.question2 = option;
    console.log(this.question2);
  }

  getListQuestionValues3(option: any): void {
    this.question2 = option;
    console.log(this.question3);
  }

  sendData(personName: string): void {
    this.sendSurveyService.createUserCalificationSurvey({
      "nombreJugador": personName,
      "calificacion": this.calification,
      "encuesta": [this.question1, this.question2, this.question3]
    }).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 3500
      })
    });
    this.router.navigate(['/']);
  }
}
