import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  requisitos = [
    '1.- CURP',
    '2.- Comprobante de pago',
    '3.- Carta laboral en caso de elegir la modalidad semiescolarizada'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
