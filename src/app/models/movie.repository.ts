import { Movie } from "./movie";

export class MovieRepository{
    private movies : Movie[];

    constructor(){

        this.movies = [
        {id : 1 , title : "title 1" , description : "film 1" , imageurl : "movie.jpg" , ispopular : false , publishedDate : new Date(2000,1,1) },
        {id : 2 , title : "title 2" , description : "film 2" , imageurl : "movie.jpg" , ispopular : true , publishedDate : new Date(2000,1,2)},
        {id : 3 , title : "title 3" , description : "film 3" , imageurl : "movie.jpg" , ispopular : false, publishedDate : new Date(2000,1,3)},
        {id : 4 , title : "title 4" , description : "film 4" , imageurl : "movie.jpg" , ispopular : true , publishedDate : new Date(2000,1,4)},
        {id : 4 , title : "title 4" , description : "film 4" , imageurl : "movie.jpg" , ispopular : true , publishedDate : new Date(2000,1,5)}
    ];
    }

    getMovies() : Movie[] {

        return this.movies;

        
    }
    getPopularMovies() : Movie[] {

        return this.movies.filter(i => i.ispopular === true);

    }

    getMovieById(id : number) : Movie | null | undefined{
        return this.movies.find(i => i.id == id);
    }
}