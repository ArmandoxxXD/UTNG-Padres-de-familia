import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  RH: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.RH = true;
  }

}
