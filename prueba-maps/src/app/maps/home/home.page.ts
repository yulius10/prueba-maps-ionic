import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { Locations } from 'src/app/models/location.models';
import { LocationsService } from 'src/app/services/locations.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  readonly #locationsService = inject(LocationsService);

  locations$ = this.#locationsService.getAllLocations({lat:4.6482784,lng:-74.272319});
  $locations = toSignal(this.locations$,{
    initialValue: [],
  });

  ngOnInit() {
  }

}
