const FilmServices = () => {

    const _apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
    const _apiKey = 'd85385a4-3668-4103-9cbf-a7b5065f8aaa';

    const getResource = async (url) => {
        let res = await (await fetch(url,
            {method: 'GET',
                headers: {'X-API-KEY': _apiKey, 'Content-Type': 'application/json'}})
            ).json()

        return res
    }

    const getTopFilms = async (pageNumber) => {
        const res = await getResource(`${_apiBase}/top?type=TOP_250_BEST_FILMS&page=${pageNumber}`)
        return res.films.map(_transformFilms)
    }

    const getFilm = async (id) => {
        const film = await getResource(`${_apiBase}/${id}`)
        return _transformFilm(film)
    }

    const _transformFilms = (films) => {

        return {
            filmId: films.filmId,
            nameRu: films.nameRu,
            posterUrl: films.posterUrl,
            rating: films.rating,
            favourites: false
        }
    }

    const _transformFilm = (film) => {

        return {
            kinopoiskId: film.kinopoiskId,
            description: film.description,
            genres: film.genres.map(items => items.genre + ', ') ,
            nameRu: film.nameRu,
            posterUrl: film.posterUrl,
            ratingKinopoisk: film.ratingKinopoisk,
            year: film.year,
            filmLength: film.filmLength,
            favourites: false
        }
    }

    return {getTopFilms, getFilm}
}

export default FilmServices