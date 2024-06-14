import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public usuario: string = '';
  public senha: string = '';
  public name: string = '';
 
  constructor(
    public fireService: FireserviceService, private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    // Primeiro, verifique se os campos obrigatórios estão preenchidos
    if (!this.usuario.trim() || !this.senha.trim() || !this.name.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Chame o serviço de signup para criar a conta do usuário
    this.fireService.signup({ usuario: this.usuario, senha: this.senha }).then(res => {
      if (res.user?.uid) {
        // Crie um objeto com os detalhes do usuário, sem incluir a senha
        var data = {
          usuario: this.usuario,
          name: this.name,
          uid: res.user.uid
        };
  
        // Salve os detalhes do usuário no Firestore
        this.fireService.saveDetails(data).then(() => {
          alert('Conta criada com sucesso!');
          this.router.navigate(['login']);
        }).catch(err => {
          alert('Erro ao salvar os detalhes do usuário: ' + err.message);
          console.log('Erro ao salvar os detalhes do usuário:', err);
        });
      }
    }).catch(err => {
      alert('Erro ao criar conta: ' + err.message);
      console.log('Erro ao criar conta:', err);
    });
  }
  
  goToLogin() {
    this.router.navigate(['login']);
  }
}
