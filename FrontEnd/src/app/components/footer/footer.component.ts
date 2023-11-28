import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

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
  esModoOscuro: boolean = false;
  constructor(private modoOscuroService:ModoOscuroService) { }


  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });
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
