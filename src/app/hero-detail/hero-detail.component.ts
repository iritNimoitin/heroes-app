import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
 @Input() hero? :Hero
 @Output() shouted = new EventEmitter<string>();
  constructor(
    private route: ActivatedRoute,
 private heroService: HeroesService,
 private location: Location

  ) { }

  ngOnInit(): void {
    this.getHero();
   }
   getHero(): void {
    const id = +(this.route.snapshot.paramMap.get('id'))!;
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
   }
   
  onShout(){
     this.shouted.emit(`hi from ${this.hero?.name}`);
  }

  goBack(): void {
    this.location.back();
   }
   
   save(): void {
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
   }
   

}
