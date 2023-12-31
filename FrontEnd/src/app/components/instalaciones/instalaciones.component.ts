import { Component, OnInit } from '@angular/core';
import { location } from 'src/app/models/location';
import { InstalacionesService } from 'src/app/services/instalaciones.service';
import { ModoOscuroService } from 'src/app/services/modo-oscuro.service';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css'],
  template: `

  `
})
export class InstalacionesComponent implements OnInit {
  esModoOscuro: boolean = false;
  public selectedLocation: location | undefined = undefined;
  public locations: Array<location> = []

  constructor(private _instalaciones: InstalacionesService,private modoOscuroService:ModoOscuroService) { }

  ngOnInit(): void {
    this._instalaciones.getData().subscribe((data) => {
      this.locations = data;
    })
    this.modoOscuroService.esModoOscuro$.subscribe((modoOscuro) => {
      this.esModoOscuro = modoOscuro;
    });
  }

  openImageModal(location: location) {
    this.selectedLocation = location;
  }
}
