import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons: any[] = [];
  favPokemon: any[] = [];
 

  constructor(
    private dataService: DataService) { }
    
     click(name: any,id: number) {
      this.favPokemon.push(this.dataService.Addpokemon(name, id));
      localStorage.setItem('favorite', JSON.stringify(this.favPokemon));   
     }

  ngOnInit():void {
    this.dataService.GetPokemons().subscribe((data: any) => {
      console.log(data);
      data.results.forEach((result: any) => {
        this.dataService.GetPokemonByName(result.name).subscribe((response: any) => {
        this.pokemons.push(response)});
        console.log(this.pokemons);
      });
    });
    this.favPokemon = JSON.parse(localStorage.getItem('favorite') || '{}') ;
  }
}
