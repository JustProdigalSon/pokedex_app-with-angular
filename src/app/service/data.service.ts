import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  
  GetPokemons(){
  return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  } 

  GetPokemonByName(name: string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  Addpokemon(name: string,id: number){
    let pokemon = [{name: name},{id:id}];
    return pokemon
  }
}


