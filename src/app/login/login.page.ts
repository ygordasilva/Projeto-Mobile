import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service'; // Verifique o caminho do serviço

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usuario: string = '';
  public senha: string = '';
  public name: string = '';
  alertButtons = ['Action'];

  constructor(
    private router: Router,
    private fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  login() {
    // Verifica se o campo de e-mail está vazio
    if (!this.usuario.trim()) {
      alert('Por favor, insira um endereço de e-mail.');
      return;
    }

    this.fireService.loginWithEmail({ usuario: this.usuario, senha: this.senha }).then((res: any) => {
      if (res.user && res.user.uid) {
        this.fireService.getDetails(res.user.uid).subscribe((userDetails: any) => {
          if (userDetails) {
            console.log(userDetails);
            this.router.navigate(['feed']);
          } else {
            this.router.navigate(['login']);
          }
        }, (err: any) => {
         
        });
      }
    }).catch((err: any) => {
  
      
    });
  }

  signup() {
    this.router.navigate(['/home']);
  }

}
