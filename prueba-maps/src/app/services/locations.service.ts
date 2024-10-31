
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Locations } from '../models/location.models';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private http = inject(HttpClient);

  

  getAllLocations(center: {lat:number,lng: number}) {
    const url = 'https://api.nicobytes.store/api/v1/locations';
    return this.http.get<Locations[]>(url,{
      params: {
        origin: `${center.lat},${center.lng}`,
        size: 10
      },
    }).pipe(
      tap(locations => console.log(locations))  // Verifica la estructura aquí
    );;
  }


}
