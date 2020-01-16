import Movie from "../models/Movie";

export default class MovieRepository {
  constructor() {}
  async findAllMovies() {
    return await Movie.query().withGraphFetched("[actors]");
  }
  async findMovieByActor(actorIDs: number[]) {
    return await Movie.query().modify("searchByActor", actorIDs);
  }
  async findMoviesByName(name: string) {
    return await Movie.query().modify("searchByName", name);
  }
  async addMovie(movie: Movie) {
    return await Movie.query().insert(movie);
  }
  async editMovie(movie: Movie, movieID: number) {
    return await Movie.query().patchAndFetchById(movieID, movie);
  }
  async deleteMovie(movieID: number) {
    return await Movie.query().deleteById(movieID);
  }
}
