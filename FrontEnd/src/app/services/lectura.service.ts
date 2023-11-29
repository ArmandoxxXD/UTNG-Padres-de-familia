import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LecturaService {
  lectura:boolean = false;

  constructor() { }
  
  leerTexto(texto: any) {
    let txt = String(texto)
    if(this.lectura){
      const utterance = new SpeechSynthesisUtterance(txt);
      window.speechSynthesis.speak(utterance);
    }
  }

}
