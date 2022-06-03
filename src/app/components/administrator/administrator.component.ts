import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.sass']
})
export class AdministratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("me llamaron?");
  }

}
