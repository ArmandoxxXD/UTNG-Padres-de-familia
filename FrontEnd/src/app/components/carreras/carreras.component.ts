import { Component, OnInit } from '@angular/core';
import {Modal} from "bootstrap";

import {LecturaService} from 'src/app/services/lectura.service' 


@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  intervaloId: any;
  carreras: any;

  constructor(public lectura: LecturaService) { 
  }

  ngOnInit(): void {
    const btn_1 = document.getElementById("boton-negocios") as HTMLButtonElement;
    const btn_2 = document.getElementById("boton-tic") as HTMLButtonElement;
    const btn_3 = document.getElementById("boton-pi") as HTMLButtonElement;

    const collapse_1 = document.getElementById("NegociosYAdministracion") as HTMLButtonElement;
    const collapse_2 = document.getElementById("Tecnologia") as HTMLButtonElement;
    const collapse_3 = document.getElementById("ProcesosIndustriales") as HTMLButtonElement;


    const contaduria = document.getElementById('Contaduria') as HTMLInputElement
    const contaduriaModal = document.getElementById('contaduria') as HTMLInputElement

    var myModal = new Modal(contaduriaModal);

    contaduria.addEventListener( "click", () => {
      myModal.show();
    })

    contaduria.addEventListener( "click", () => {
      collapse_2.classList.remove("show")
      collapse_3.classList.remove("show")
    })

    btn_1.addEventListener( "click", () => {
      collapse_2.classList.remove("show")
      collapse_3.classList.remove("show")
    })

    btn_2.addEventListener( 'click', () => {
      collapse_1.classList.remove("show")
      collapse_3.classList.remove("show")
    })

    btn_3.addEventListener( 'click', () => {
      collapse_1.classList.remove("show")
      collapse_2.classList.remove("show")
    })

    this.iniciarAnimacion();
  }

  iniciarAnimacion() {
    const boton_negocios = document.getElementById("boton-negocios") as HTMLButtonElement;
    const boton_tic = document.getElementById("boton-tic") as HTMLButtonElement;
    const boton_pi = document.getElementById("boton-pi") as HTMLButtonElement;
    // Reiniciar la animación cada 8 segundos (ajusta según tus necesidades)

    this.intervaloId = setInterval(() => {
      setTimeout(() => {
        boton_negocios?.classList.remove("shini")
        boton_tic?.classList.remove("shini")
        boton_pi?.classList.remove("shini")
      }, 3000);
      boton_negocios?.classList.add("shini")
      boton_tic?.classList.add("shini")
      boton_pi?.classList.add("shini")
    }, 45000);

    this.iniciarAnimacion();
  }


}
