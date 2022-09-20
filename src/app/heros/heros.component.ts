import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  
  selectedHero :Hero|undefined = undefined;
  heroes ?:Hero[]
  shout='';

  constructor(private heroService:HeroesService,private messageService: MessageService) { 
   
  }

  ngOnInit(): void {
     this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero :Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  onShout(msg:string){
    alert(msg)
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
    this.heroes?.push(hero);
    });
   }
   delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(() =>  this.heroes = this.heroes?.filter(h => h !== hero));
   }
   

}
