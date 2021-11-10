
        let numberOfFilms=+prompt("Сколько фильмов вы посмотрели?","");
        let personalMovieDB={
            count:numberOfFilms,
            movies:{},
            actors:{},
            genres:[],
            privat:false
        };
        personalMovieDB["count"]=numberOfFilms;
        
        const nazv=prompt("какой последний фильм посмотрели?");
        let bal=prompt("какой балл?");
        personalMovieDB.movies[nazv]=bal;

        const c=prompt("какой последний фильм посмотрели?");
        const d=prompt("какой балл?");
        personalMovieDB.movies[c]=d;

        console.log(personalMovieDB);