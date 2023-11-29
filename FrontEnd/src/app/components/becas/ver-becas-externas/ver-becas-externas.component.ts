import { Component, OnInit } from '@angular/core';

import {LecturaService} from 'src/app/services/lectura.service' 

@Component({
  selector: 'app-ver-becas-externas',
  templateUrl: './ver-becas-externas.component.html',
  styleUrls: ['./ver-becas-externas.component.css']
})
export class VerBecasExternasComponent implements OnInit {

  constructor( public lectura: LecturaService) { }

  ngOnInit(): void {
  }

}
