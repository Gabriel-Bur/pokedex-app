import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/class/Pokemon';
import { POKEMONSMOCK } from 'src/assets/pokemon-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Pokemons:Pokemon[];
  title = 'Pokedex';

constructor() {
  this.Pokemons = POKEMONSMOCK;
}

  ngOnInit() {

  }
}
