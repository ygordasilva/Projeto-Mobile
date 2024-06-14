import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
})
export class CompararPage {
  pokemon1: any;
  pokemon2: any;
  pokemon1Id: number = 0;
  pokemon2Id: number = 0;

  constructor(private http: HttpClient) {}
  

  getPokemonData(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  compare() {
    if (this.pokemon1Id && this.pokemon2Id) {
      this.getPokemonData(this.pokemon1Id).subscribe(data1 => {
        this.pokemon1 = data1;
        this.getPokemonData(this.pokemon2Id).subscribe(data2 => {
          this.pokemon2 = data2;
        });
      });
    }
  }
}
