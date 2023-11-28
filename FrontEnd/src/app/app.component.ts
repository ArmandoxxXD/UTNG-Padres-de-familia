import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  constructor(private router: Router) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if ((event.shiftKey || event.metaKey) && (event.key === 'Tab')) {
      event.preventDefault();
      switch (this.router.url) {
        case '/home':
          this.router.navigate(['/becas/tipos-becas'])
          break;
        case '/becas/tipos-becas':
        case '/becas/becas-externas':
        case '/becas/becas-internas':
          this.router.navigate(['/carreras'])
          break;
        case '/carreras':
          this.router.navigate(['/instalaciones'])
          break;
        case '/instalaciones':
            this.router.navigate(['/inscripciones'])
            break;
        default:
          this.router.navigate(['/home'])
      }
    }
  }
}
