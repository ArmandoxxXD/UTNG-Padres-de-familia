import { Component, OnInit} from '@angular/core';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

@Component({
  selector: 'app-ver-becas-internas',
  templateUrl: './ver-becas-internas.component.html',
  styleUrls: ['./ver-becas-internas.component.css']
})
export class VerBecasInternasComponent implements OnInit {
  esModoOscuro: boolean = false;

  constructor(private modoOscuroService: ModoOscuroService) { }

  ngOnInit(): void {
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });
  }

}
