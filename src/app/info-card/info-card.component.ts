import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() image: string = ''; 
  @Input() title: string = ''; 
  @Input() text: string = ''; 
  showInfo: boolean = false;

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
