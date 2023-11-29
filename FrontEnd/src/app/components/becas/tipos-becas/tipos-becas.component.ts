import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';


@Component({
  selector: 'app-tipos-becas',
  templateUrl: './tipos-becas.component.html',
  styleUrls: ['./tipos-becas.component.css']
})
export class TiposBecasComponent implements OnInit {
  esModoOscuro: boolean = false;

  constructor(private modoOscuroService:ModoOscuroService) { }

  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });
  }

  modoOscuro() {
    this.modoOscuroService.modoOscuro.subscribe((value: boolean) => {
    })
  }



}
