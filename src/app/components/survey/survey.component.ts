import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {

  arrayOfValues: Array<number>;

  constructor(private activatedRoute: ActivatedRoute) {
    const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');

    // If the value is null, create a new array and store it
    // Else parse the JSON string we sent into an array
    if (myArray === null) {
      this.arrayOfValues = new Array<number>();
    } else {
      this.arrayOfValues = JSON.parse(myArray);
    }
  }

  ngOnInit(): void {
    console.log(this.arrayOfValues);
  }

}
