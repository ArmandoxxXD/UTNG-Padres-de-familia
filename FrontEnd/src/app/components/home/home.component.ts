import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carreras = [
    { titulo: 'Contaduría', visible: false },
    { titulo: 'Energías Renovables Área Calidad y Ahorro de Energía', visible: false },
    { titulo: 'Desarrollo de Software Multiplataforma', visible: false },
    { titulo: 'Ingeniería en Mecatrónica', visible: false },
    { titulo: 'Ingeniería en Entornos Virtuales y Negocios Digitales', visible: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Calcula la posición del scroll y determina qué carreras deben ser visibles
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    this.carreras.forEach((carrera, index) => {
      const element = document.getElementById(`carrera_${index}`);
      if (element) {
        const elementPosition = element.offsetTop;

        // Define una posición de desplazamiento para mostrar las carreras
        const threshold = elementPosition - window.innerHeight + 100;

        // Cambia la visibilidad de la carrera según la posición de desplazamiento
        carrera.visible = scrollPosition > threshold;
      }
    });
  }
}
