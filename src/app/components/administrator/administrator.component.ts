import { Component, OnInit } from '@angular/core';
import { AdministratorService } from './administrator.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.sass']
})
export class AdministratorComponent implements OnInit {

  promedioGlobalPregunta: any[] = [];
  preguntasCorrectasTest: any[] = [];
  preguntasIncorrectasTest: any[] = [];
  listadoPersonasTest: any[] = [];
  promedioFormulario: any[] = [];
  coeficienteCorrelacion: number = 0;
  x: number = 0;
  y: number = 0;

  constructor(private administrationService: AdministratorService) { }

  ngOnInit(): void {
    this.administrationService.getPromedioGlobalPregunta()
      .subscribe(data => (this.promedioGlobalPregunta = data));

    this.administrationService.getPreguntasCorrectas()
      .subscribe(data => (this.preguntasCorrectasTest = data));

    this.administrationService.getPreguntasIncorrectas()
      .subscribe(data => (this.preguntasIncorrectasTest = data));

    this.administrationService.getListadoPersonasTest()
      .subscribe(data => (this.listadoPersonasTest = data));

    this.administrationService.getCoeficiente()
      .subscribe(data => (this.coeficienteCorrelacion = data));
  }

}
