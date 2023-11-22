import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor() { }


  ngOnInit(): void {
  }

    
  temas= [
    "Problemas técnicos",
    "Cuenta y acceso",
    "Facturación",
    "Sugerencias y comentarios",
    "Asistencia con el uso de la plataforma",
    "Reportar un error",
    "Otro"
  ]


}
