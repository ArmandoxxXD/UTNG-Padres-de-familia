import { Component, OnInit} from '@angular/core';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

import {LecturaService} from 'src/app/services/lectura.service'

@Component({
  selector: 'app-ver-becas-internas',
  templateUrl: './ver-becas-internas.component.html',
  styleUrls: ['./ver-becas-internas.component.css']
})
export class VerBecasInternasComponent implements OnInit {
  esModoOscuro: boolean = false;

  constructor(private modoOscuroService:ModoOscuroService, public lectura: LecturaService) { }

  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });
  }

}
