import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/class/Pokemon';
//import { POKEMONSMOCK } from 'src/assets/pokemon-mock';
import { ApiService } from 'src/app/Api/Api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private pokemons:Pokemon[] = [];

constructor(private apiService:ApiService) {}

  ngOnInit() {
    for(var i = 1;i <= 152; i ++) {
      this.apiService.getPokemonById(i).subscribe((data) => {
        var poke = new Pokemon(data['id'],data['name'],data['sprites']['front_default'])
        this.pokemons.push(poke);
      });
    }
  }
}
