
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

import {LecturaService} from 'src/app/services/lectura.service'

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit, AfterViewInit {

  title = 'Inscripciones';
  typing = true;

  requisitos = [
    '1.- CURP',
    '2.- Comprobante de pago',
    '3.- Carta laboral en caso de elegir la modalidad semiescolarizada'
  ];

  mostrarCostos: boolean = false;
  mostrarRequisitos: boolean = false;
  isCollapseCostosExpanded: boolean = false;
  isCollapseRequisitosExpanded: boolean = false;
  esModoOscuro: boolean = false;

  constructor(private modoOscuroService:ModoOscuroService, public lectura: LecturaService) { }


  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });

  }

  ngAfterViewInit() {
    let currentLength = 0;
    const fullText = this.title;
    this.title = '';

    const typingInterval = setInterval(() => {
      this.title += fullText[currentLength];
      currentLength++;

      if (currentLength === fullText.length) {
        clearInterval(typingInterval);
        this.typing = false; // Oculta el cursor al finalizar
      }
    }, 150); // Velocidad de escritura (ms por carácter)
  
    const collapseCostos = document.getElementById('collapseCostos');
    const collapseRequisitos = document.getElementById('collapseRequisitos');

    if (collapseCostos) {
      collapseCostos.addEventListener('shown.bs.collapse', () => this.scrollIntoView(collapseCostos));
      collapseCostos.addEventListener('hidden.bs.collapse', () => this.scrollIntoView(collapseCostos));
    }

    if (collapseRequisitos) {
      collapseRequisitos.addEventListener('shown.bs.collapse', () => this.scrollIntoView(collapseRequisitos));
      collapseRequisitos.addEventListener('hidden.bs.collapse', () => this.scrollIntoView(collapseRequisitos));
    }
  }

  toggleCostos(): void {
    this.mostrarCostos = !this.mostrarCostos;
  }

  toggleRequisitos(): void {
    this.mostrarRequisitos = !this.mostrarRequisitos;
  }


  // Función para hacer scroll a la sección especificada.
  scrollIntoView(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  modoOscuro() {
    this.modoOscuroService.modoOscuro.subscribe((value: boolean) => {
    })
  }



}
