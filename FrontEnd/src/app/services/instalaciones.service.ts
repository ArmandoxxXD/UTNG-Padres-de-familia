import { HttpClient } from '@angular/common/http';
import { location } from 'src/app/models/location';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Array<location>>('assets/jsons/locations.json');
  }
}
