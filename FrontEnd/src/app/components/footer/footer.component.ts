import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @ViewChild('modalButton', { static: false })
  modalButtonRef!: ElementRef;

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    temaValue: new FormControl(1)
  })
  esModoOscuro: boolean = false;

  option: 'preguntas' | 'ayuda' = 'preguntas'

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


  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if ((event.altKey || event.metaKey) && (event.key === 'a')) {
      const modalButton: HTMLInputElement = this.modalButtonRef.nativeElement;
      modalButton.click();
    }
  }
}
