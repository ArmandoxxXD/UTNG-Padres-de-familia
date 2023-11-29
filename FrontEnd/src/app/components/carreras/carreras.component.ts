import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  RH: boolean = true;
  intervaloId: any;

  constructor() { }

  ngOnInit(): void {
    this.RH = true;

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
