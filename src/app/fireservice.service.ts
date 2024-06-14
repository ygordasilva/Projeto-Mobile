import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface LoginData {
  usuario: string;
  senha: string;
}

interface UserDetails {
  uid: string;
  name: string;
  // Adicione outras propriedades conforme necessário
}

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private afAuth: AngularFireAuth
  ) { }

  loginWithEmail(data: LoginData): Promise<any> {
    return this.auth.signInWithEmailAndPassword(data.usuario, data.senha)
      .then(userCredential => {
        console.log('Login bem-sucedido:', userCredential);
        return userCredential;
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
        throw error;
      });
  }

  signup(data: LoginData): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(data.usuario, data.senha)
      .then(userCredential => {
        console.log('Usuário criado com sucesso:', userCredential);
        return userCredential;
      })
      .catch(error => {
        console.error('Erro ao criar usuário:', error);
        throw error;
      });
  }

  saveDetails(data: UserDetails): Promise<void> {
    return this.firestore.collection('users').doc(data.uid).set(data)
      .then(() => {
        console.log('Detalhes do usuário salvos com sucesso');
      })
      .catch(error => {
        console.error('Erro ao salvar detalhes do usuário:', error);
        throw error;
      });
  }

  getDetails(uid: string): Observable<UserDetails | undefined> {
    return this.firestore.collection('users').doc<UserDetails>(uid).valueChanges()
      .pipe(
        map((userDetails: UserDetails | undefined) => {
          if (userDetails) {
            return userDetails;
          } else {
            throw new Error('Detalhes do usuário não encontrados');
          }
        }),
        catchError(error => {
          console.error('Erro ao obter detalhes do usuário:', error);
          return of(undefined);
        })
      );
  }
  logout() {
    return this.afAuth.signOut();
  }
}

