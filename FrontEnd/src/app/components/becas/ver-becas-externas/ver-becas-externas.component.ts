import { Component, OnInit } from '@angular/core';

import {LecturaService} from 'src/app/services/lectura.service' 

@Component({
  selector: 'app-ver-becas-externas',
  templateUrl: './ver-becas-externas.component.html',
  styleUrls: ['./ver-becas-externas.component.css']
})
export class VerBecasExternasComponent implements OnInit {
  title: string ='Becas Externas';
  typing: boolean  = true;
  constructor( public lectura: LecturaService) { }

  ngOnInit(): void {
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
