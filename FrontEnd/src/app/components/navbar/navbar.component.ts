import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';
// Declaraciones para evitar errores de compilación
declare var webkitSpeechRecognition: any;
declare var SpeechRecognition: any;

import {LecturaService} from 'src/app/services/lectura.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @ViewChild('voiceButton') voiceButton!: ElementRef;

  private activeElement = 0;
  private recognition = new webkitSpeechRecognition();
  public isMicEnabled: boolean = false;
  public statusMic: 'error' | 'done' | 'default' = 'default';

  constructor(private router: Router, private modoOscuroService: ModoOscuroService, private toastr: ToastrService, public lectura: LecturaService) { 
    this.recognition.lang = 'es-ES';

    this.recognition.onstart = (event: any) => {
      this.isMicEnabled = true;
      console.log(this.isMicEnabled)
    };

    this.recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();
      this.handleVoiceCommand(command);
    };

    this.recognition.onerror = (event: any) => {
      this.toastr.error('Error en el reconocimiento de voz', 'Error', {timeOut: 3000});
      if(this.statusMic === 'error') {
        this.statusMic = 'error';
      }
    };

    this.recognition.onend = () => {
      console.log(this.statusMic)
      if(this.statusMic === 'error') { this.recognition.start() }

      this.isMicEnabled = false;
      this.toastr.error('Comando no reconocido', 'Error', {timeOut: 3000});

    };
  }

  ngOnInit(): void {
    console.log(this.lectura.lectura)

    this.router.events.subscribe(() => {
      switch (this.router.url) {
        case '/home':
          this.activeElement = 0;
          break;
        case '/becas/tipos-becas':
        case '/becas/becas-externas':
        case '/becas/becas-internas':
          this.activeElement = 1;
          break;
        case '/carreras':
          this.activeElement = 2;
          break;
        case '/instalaciones':
          this.activeElement = 3;
          break;
        case '/inscripciones':
          this.activeElement = 4;
          break;
        default:
          this.activeElement = 0;
      }
    })


    const menu = document.getElementById("menu__burguer");
    const navbar = document.getElementById("header_elements");

    const options = document.querySelectorAll(".option")

    const elemento_1 = document.getElementById("home");
    const elemento_2 = document.getElementById("becas");
    const elemento_3 = document.getElementById("carreras");
    const elemento_4 = document.getElementById("instalaciones");
    const elemento_5 = document.getElementById("inscripciones");


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
      case "/inscripciones":
        elemento_5?.classList.add('active');
        break;
    }

  }


  getActiveElement() {
    return this.activeElement;
  }

  activarElemento(path: any) {
    switch (path) {
      case "home":
        this.router.navigate(['home'])
        break;
      case "becas":
        this.router.navigate(['becas/tipos-becas'])
        break;
      case "carreras":
        this.router.navigate(['carreras'])
        break;
      case "instalaciones":
        this.router.navigate(['instalaciones'])
        break;
      case "inscripciones":
        this.router.navigate(['inscripciones'])
        break;
    }
  }

  eliminarActivarGeneral() {
    var elemento_1 = document.getElementById("home");
    var elemento_2 = document.getElementById("becas");
    var elemento_3 = document.getElementById("carreras");
    var elemento_4 = document.getElementById("instalaciones");
    var elemento_5 = document.getElementById("inscripciones");

    elemento_1?.classList.remove('active');
    elemento_2?.classList.remove('active');
    elemento_3?.classList.remove('active');
    elemento_4?.classList.remove('active');
    elemento_5?.classList.remove('active');
  }


  listenToVoice() {
    if(this.isMicEnabled) {
      this.statusMic = 'default'

      console.log(this.statusMic)
      this.recognition.stop();
    } else {
      this.recognition.start();
    }
  }

  handleVoiceCommand(command: string) {
    if (command.includes('inscripciones')) {
      this.router.navigate(['/inscripciones']);
      this.statusMic = 'done';
    } else if (command.includes('home')) {
      this.router.navigate(['/home']);
      this.statusMic = 'done';
    } else if (command.includes('tipos becas') || command.includes('becas')) {
      this.router.navigate(['/becas/tipos-becas']);
      this.statusMic = 'done';
    } else if (command.includes('becas internas')) {
      this.router.navigate(['/becas/becas-internas']);
      this.statusMic = 'done';
    } else if (command.includes('becas externas')) {
      this.router.navigate(['/becas/becas-externas']);
      this.statusMic = 'done';
    } else if (command.includes('contacto')) {
      this.router.navigate(['/contacto']);
      this.statusMic = 'done';
    } else if (command.includes('carreras')) {
      this.router.navigate(['/carreras']);
      this.statusMic = 'done';
    } else if (command.includes('instalaciones')) {
      this.router.navigate(['/instalaciones']);
      this.statusMic = 'done';
    } else {
      this.toastr.error('Comando no reconocido', 'Error', {timeOut: 3000});
      this.statusMic = 'error';
    }
  }



  public theme: "light" | "dark" = "light";

  TemaOscuro() {
    document.querySelector('body')?.setAttribute("data-bs-theme", "dark");
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.querySelector('#icon')?.setAttribute("class", "fa-solid fa-sun");
    this.theme = 'dark';
    this.modoOscuroService.setModoOscuro(true);
  }

  TemaClaro() {
    document.querySelector('body')?.setAttribute("data-bs-theme", "light");
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.querySelector('#icon')?.setAttribute("class", "fa-solid fa-moon");
    this.theme = 'light';
    this.modoOscuroService.setModoOscuro(false);
  }

  CambiarTema() {
    document.querySelector('body')?.getAttribute("data-bs-theme") === 'light' ? this.TemaOscuro() : this.TemaClaro();
  }



  @ViewChild('themeButton', { static: false })
  themeButtonRef!: ElementRef;

  @ViewChild('keysButton', { static: false })
  keysButtonRef!: ElementRef;

  @ViewChild('listenButton', { static: false })
  listenButtonRef!: ElementRef;
  
  @ViewChild('speakButton', { static: false })
  speakButtonRef!: ElementRef;

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if ((event.altKey || event.metaKey) && (event.key === 't')) {
      const themeButton: HTMLInputElement = this.themeButtonRef.nativeElement;
      themeButton.click();
    }

    if ((event.altKey || event.metaKey) && (event.key === 'k')) {
      const keysButton: HTMLInputElement = this.keysButtonRef.nativeElement;
      keysButton.click();
    }


    if ((event.altKey || event.metaKey) && (event.key === 'm')) {
      const listenButton: HTMLInputElement = this.listenButtonRef.nativeElement;
      listenButton.click();
    }

    if ((event.altKey || event.metaKey) && (event.key === 'l')) {
      this.activar();
    }
  }


  activar() {
    this.lectura.lectura = !this.lectura.lectura
    console.log(this.lectura.lectura)
  }
  
}
