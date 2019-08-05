import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = "https://pokeapi.co/api/v2/pokemon/"

constructor(private httpClient:HttpClient){ }

  getPokemonById(id:number){
    return this.httpClient.get(this.url+id);
  }
}
