import { Component, OnInit } from '@angular/core';
import { location } from 'src/app/models/location';
import { InstalacionesService } from 'src/app/services/instalaciones.service';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css'],
  template: `

  `
})
export class InstalacionesComponent implements OnInit {

  public selectedLocation: location | undefined = undefined;
  public locations: Array<location> = []

  constructor(private _instalaciones: InstalacionesService) { }

  ngOnInit(): void {
    this._instalaciones.getData().subscribe((data) => {
      this.locations = data;
    })
  }

  openImageModal(location: location) {
    this.selectedLocation = location;
  }
}
