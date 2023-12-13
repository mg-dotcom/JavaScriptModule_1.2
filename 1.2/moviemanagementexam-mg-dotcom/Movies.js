// 65130500120 Apisara Chonprasit 

class Movies {
  constructor(){
    this.movies = []
  }

  getAllMovies(){
    return this.movies
  }

  addMovie(title, director, year, genre){
    if(!title || !director || !year || !genre){
      return undefined
    } 
    
    const duplicate = this.movies.find((movie) =>
      movie.title.toLowerCase() === title.toLowerCase() &&
      movie.director.toLowerCase() === director.toLowerCase()
    );

    if (duplicate) {
      return undefined;
    }

      const movie = {title: title, director: director, year: year, genre: genre}
      this.movies.push(movie)
      return movie
  }
  

  updateMovie(title, updatedDetails){
    const movieIndex = this.movies.findIndex((movie) =>
      movie.title.toLowerCase() === title.toLowerCase()
    );

    if (movieIndex === -1) {
      return undefined;
    }

    const updatedMovie = {
      ...this.movies[movieIndex],
      ...updatedDetails,
    };

    this.movies[movieIndex] = updatedMovie
    return updatedMovie
  }

  deleteMovieByTitle(title){
    const movieIndex = this.movies.findIndex((movie) =>
    movie.title.toLowerCase() === title.toLowerCase())

    if (movieIndex === -1) {
      return "no movie deleted";
    } 

    const delMovieArr = this.movies.splice(movieIndex, 1)[0] // ได้มาเป็น object เเล้ว
    const movieDetails = `{Title: ${delMovieArr.title}, Director: ${delMovieArr.director}, Year: ${delMovieArr.year}, Genre: ${delMovieArr.genre}}`;
    return `a movie object ${movieDetails} is deleted`;
  }
}
module.exports = Movies
// const mv = new Movies()
// console.log(mv.addMovie('sfsdf', 'Quentin Tarantino', 1994, 'Crime'))
// console.log(mv.getAllMovies())
// console.log(mv.updateMovie('sfsdf', {director: 'James Cameron'}))
// console.log(mv.getAllMovies())
// console.log(mv.deleteMovieByTitle('sfsdf'));