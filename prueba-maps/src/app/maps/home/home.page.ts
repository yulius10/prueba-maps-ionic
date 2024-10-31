import { Component, inject, OnInit, signal, viewChild, ViewChild, viewChildren } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {GoogleMap, MapAdvancedMarker, MapInfoWindow} from '@angular/google-maps';

import type { Locations } from 'src/app/models/location.models';
import { LocationsService } from 'src/app/services/locations.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage implements OnInit {
  
  infoWindowRef = viewChild.required(MapInfoWindow);
  markerRef = viewChildren(MapAdvancedMarker);

  readonly #locationsService = inject(LocationsService);

  center = signal<google.maps.LatLngLiteral>({lat:4.6482784,lng:-74.272319});
  zoom = signal(12);



  locations$ = this.#locationsService.getAllLocations(this.center());
  $locations = toSignal(this.locations$,{
    initialValue: [],
  });

  ngOnInit() {
  }


  mapClick(location:Locations,market:MapAdvancedMarker){
    console.log(location);
    const content = `<h1 class="font-bold text-2x1" style="color:black"> ${location.name} </h1>
    <p style="color:black"> ${location.description} </p>`;
    this.infoWindowRef().open(market,false,content);
  }

  goToPlace(location:Locations,position:number){
    const markers = this.markerRef();
    const markerRef = markers[position];
    this.mapClick(location,markerRef);
  }
}
//AIzaSyC6m39pUDbKTEU2G0Lb40wWlCRpuY_qTsI