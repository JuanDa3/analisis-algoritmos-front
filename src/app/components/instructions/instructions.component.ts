import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.sass']
})
export class InstructionsComponent implements OnInit {
  @Input() prueba: string;

  constructor() {
    this.prueba = "";
  }

  ngOnInit(): void {
  }

}
