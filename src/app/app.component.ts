import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FireserviceService } from './fireservice.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
 
})
export class AppComponent {
  allowedPages: string[] = ['/feed', '/creditos', '/pokedex', '/comparar']; 
  showMenu: boolean = false;

  constructor(private router: Router, private fireService: FireserviceService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = this.allowedPages.includes(event.url);
      }
    });
  }
  logout() {
    this.fireService.logout().then(() => {
      this.router.navigate(['/login']); 
    }).catch((err: any) => {
      console.error('Erro ao fazer logout:', err);
    });
  }
}
