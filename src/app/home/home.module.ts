import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding: -5,
      radius: 140,
      toFixed: 0,
      maxPercent: 100,
      imageHeight: 121,
      imageWidth: 119,
      showTitle: false,
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      startFromZero: false,
      showZeroOuterStroke: false,
      outerStrokeWidth: 15,
      innerStrokeWidth: 5,
      animationDuration: 0
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
