import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';
import {LecturaService} from 'src/app/services/lectura.service';


@Component({
  selector: 'app-tipos-becas',
  templateUrl: './tipos-becas.component.html',
  styleUrls: ['./tipos-becas.component.css']
})
export class TiposBecasComponent implements OnInit {
  esModoOscuro: boolean = false;
  title: string ='Becas';
  typing: boolean  = true;

  constructor(private modoOscuroService:ModoOscuroService, public lectura: LecturaService) { }

  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });
  }

  modoOscuro() {
    this.modoOscuroService.modoOscuro.subscribe((value: boolean) => {
    })
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
    }, 150); // Vel/* In the given code, there is no variable or function named `o`. Therefore, it is
   }
}
