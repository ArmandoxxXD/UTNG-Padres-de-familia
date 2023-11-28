import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

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
  esModoOscuro: boolean = false;

  constructor(private modoOscuroService:ModoOscuroService) { }

  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });

  }

  mostrarCostos: boolean = false;
  mostrarRequisitos: boolean = false;

  toggleCostos(): void {
    this.mostrarCostos = !this.mostrarCostos;
  }

  toggleRequisitos(): void {
    this.mostrarRequisitos = !this.mostrarRequisitos;
  }


  modoOscuro() {
    this.modoOscuroService.modoOscuro.subscribe((value: boolean) => {
    })
  }

}
