import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';
import { InfoCardComponent } from '../info-card/info-card.component'; 

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FeedPageRoutingModule
  ],
  declarations: [
    FeedPage,
    InfoCardComponent 
  ]
})
export class FeedPageModule {}
