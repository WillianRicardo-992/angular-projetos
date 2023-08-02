import { Component } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = []

  animalDetails = '';

  constructor(private listService: ListService){
    this.getAnimals()
  }

  showAge(animal: Animal): void
  {
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} ano(s)!`
  }

  removeAnimal(animal: Animal){
    console.log('removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void
 {
  this.listService.getAll().subscribe((animals) => (this.animals = animals))
 }
}
