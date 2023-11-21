import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menu = document.getElementById("menu__burguer");
    const navbar = document.getElementById("header_elements");

    const options = document.querySelectorAll(".option")

    const elemento_1 = document.getElementById("home");
    const elemento_2 = document.getElementById("becas");
    const elemento_3 = document.getElementById("carreras");
    const elemento_4 = document.getElementById("instalaciones");
    const elemento_5 = document.getElementById("acerca");


    menu?.addEventListener('click', () => {
      const claseDelObjeto = document.getElementById("header_elements");

      const clasesDelElemento = claseDelObjeto?.classList;
  
      const arrayDeClases = Array.from(Object(clasesDelElemento));

      
      console.log(arrayDeClases)
      if(String(arrayDeClases[1]) == "animation_close"){
        this.limpiar_Nabvar_close(navbar, options);
        void navbar?.offsetWidth;
        this.abrir_Nabvar(navbar, options);
      } else if (String(arrayDeClases[1]) == "animation_open") {
        this.limpiar_Nabvar_open(navbar, options);
        void navbar?.offsetWidth;
        this.cerrar_Nabvar(navbar, options);
      } else {
        this.abrir_Nabvar(navbar, options);
      }

      console.log(arrayDeClases)

    })

    const ubicacionActual = window.location.pathname;

    switch (ubicacionActual) {
      case "/home":
        elemento_1?.classList.add('active');
        break;
      case "/becas":
        elemento_2?.classList.add('active');
        break;
      case "/carreras":
        elemento_3?.classList.add('active');
        break;
      case "/instalaciones":
        elemento_4?.classList.add('active');
        break;
      case "/acerca":
        elemento_5?.classList.add('active');
        break;
    }

  }

  activarElemento(path: any) {
    this.eliminarActivarGeneral();

    var elemento = document.getElementById(path);

    elemento?.classList.add('active');
  }

  eliminarActivarGeneral() {
    var elemento_1 = document.getElementById("home");
    var elemento_2 = document.getElementById("becas");
    var elemento_3 = document.getElementById("carreras");
    var elemento_4 = document.getElementById("instalaciones");
    var elemento_5 = document.getElementById("acerca");

    elemento_1?.classList.remove('active');
    elemento_2?.classList.remove('active');
    elemento_3?.classList.remove('active');
    elemento_4?.classList.remove('active');
    elemento_5?.classList.remove('active');
  }
  
  limpiar_Nabvar_open(navbar: any, options: any){
    //open
    navbar?.classList.remove("animation_open");

    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('font_open');
    }
  }

  limpiar_Nabvar_close(navbar: any, options: any){
    //close
    navbar?.classList.remove("animation_close");

    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove('font_close');
    }
  }

  cerrar_Nabvar(navbar: any, options: any) {

    navbar?.classList.add("animation_close");

    for (let i = 0; i < options.length; i++) {
      options[i].classList.add('font_close');
    }
  }

  abrir_Nabvar(navbar: any, options: any) {
    navbar?.classList.add("animation_open");

    for (let i = 0; i < options.length; i++) {
      options[i].classList.add('font_open');
    }
  }

}
