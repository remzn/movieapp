import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  category : Category[];
  categoryRepository : CategoryRepository;

  constructor(){
    this.categoryRepository = new CategoryRepository();
    this.category = this.categoryRepository.getCategories();
  }

}

