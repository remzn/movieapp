import { raceWith } from "rxjs";
import { Category } from "./category";

export class CategoryRepository{
    private categories : Category[];

    constructor(){
        this.categories = [
            {id : 1 ,name : "Macera"},
            {id : 2 ,name : "Romantik"},
            {id : 3 ,name : "Komedi"},
            {id : 4 ,name : "Dram"}
        ];
    }

    getCategories() : Category[] {

        return this.categories;
    }
}