import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  urlTest: string = 'http://localhost:8080/api/preguntatestcontroller/';
  urlFormulario: string = 'http://localhost:8080/api/formulario';

  constructor(private http: HttpClient) { }

  getPromedioGlobalPregunta(): Observable<any> {
    return this.http.get<any>(this.urlTest + 'promedioglobalpregunta');
  }

  getPreguntasCorrectas(): Observable<any> {
    return this.http.get<any>(this.urlTest + 'preguntascorrectas');
  }

  getPreguntasIncorrectas(): Observable<any> {
    return this.http.get<any>(this.urlTest + 'preguntasincorrectas');
  }

  getListadoPersonasTest(): Observable<any> {
    return this.http.get<any>(this.urlTest + 'listadocalificacion');
  }

  getPromedioFormulario(): Observable<any> {
    return this.http.get<any>(this.urlFormulario);
  }

  getCoeficiente(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/cliente/coeficiente');
  }
}
