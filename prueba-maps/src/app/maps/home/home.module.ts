import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {GoogleMap,MapAdvancedMarker,MapInfoWindow} from '@angular/google-maps'

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMap,
    MapAdvancedMarker,
    MapInfoWindow,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  

}
