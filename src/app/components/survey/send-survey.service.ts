import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendSurveyService {

  urlBack = 'https://analisis-algoritmos.herokuapp.com/api/cliente';

  constructor(private http: HttpClient) { }

  createUserCalificationSurvey(data: any): Observable<any> {
    return this.http.post<any>(this.urlBack, data);
  }
}
