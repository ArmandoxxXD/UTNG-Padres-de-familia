import { Component, OnInit } from '@angular/core';
import { location } from 'src/app/models/location';
import { InstalacionesService } from 'src/app/services/instalaciones.service';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  public locations: Array<location> = []

  constructor(private _instalaciones: InstalacionesService) { }

  ngOnInit(): void {
    this._instalaciones.getData().subscribe((data) => {
      this.locations = data;
    })
  }
}
