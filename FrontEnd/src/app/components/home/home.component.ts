import { Component, OnInit } from '@angular/core';

import {LecturaService} from 'src/app/services/lectura.service' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public lectura: LecturaService) { }

  ngOnInit(): void {
  }

}
