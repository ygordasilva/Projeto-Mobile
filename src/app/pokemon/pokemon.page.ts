import { PokeapiService } from '../apis/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonId: string = '';
  pokemon: any = { types: [] };

  constructor(private activatedRoute: ActivatedRoute,
              private pokeapiService: PokeapiService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.pokemonId = paramMap.get('id') ?? '';
      this.getPokemonData();
    });
  }

  async getPokemonData() {
    try {
      const pokemon = await this.pokeapiService.getPokemon(this.pokemonId);
      this.pokemon = pokemon;
    } catch (error) {
      console.error('Error fetching pokemon:', error);
    }
  }

  capturar() {
    this.navCtrl.navigateForward('pokebola', { queryParams: { pokemonId: this.pokemonId } });
  }
}
