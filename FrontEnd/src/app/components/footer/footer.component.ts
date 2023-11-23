import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Expression } from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    temaValue: new FormControl(1)
  })
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


  test(event: any) {
    console.log(event)
  }
}
