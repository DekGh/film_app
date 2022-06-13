import './singleFilmPage.scss'

import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import FilmServices from "../../services/FilmServices";

const SingleFilmPage = ({films, changeFilms}) => {

    const {filmId} = useParams()

    const [film, setFilm] = useState([])

    const {getFilm} = FilmServices();

    useEffect(() => {
        updateFilm()
    }, [filmId])

    const updateFilm = () => {
        getFilm(filmId)
            .then(onFilmLoaded)
    }

    const onFilmLoaded = (newFilm) => {
        const favouriteFilm = films.find(item => item.filmId === newFilm.kinopoiskId)
        setFilm({...newFilm, favourites: favouriteFilm.favourites})
    }

    const addFavouriteFilm = (id) => {
        const favouriteFilm = films.find(item => item.filmId === id)
        setFilm(film => {return {...film, favourites: !favouriteFilm.favourites}})
        const changeFilm = films.map((film) => {
            if (film.filmId === id) {
                return {...film, favourites: !film.favourites}
            }
            return film
        })
        changeFilms(changeFilm)
    }

    const {nameRu, posterUrl, ratingKinopoisk, year, filmLength, description, genres, kinopoiskId, favourites} = film

    return (
        <div className="single-film">
            <img src={posterUrl} alt={nameRu} className="single-film__img"/>
            <div className="single-film__info">
                <h2 className="single-film__name">{nameRu}</h2>
                <p className="single-film__descr">Жанры: {genres}</p>
                <p className="single-film__descr">{description}</p>
                <p className="single-film__descr">Продолжительность: {filmLength} мин.</p>
                <p className="single-film__descr">Год: {year}</p>
                <p className="single-film__descr">Рейтинг: {ratingKinopoisk}</p>
                <button  onClick={() => addFavouriteFilm(kinopoiskId)}
                         style={{backgroundColor: favourites ? 'cornflowerblue' : 'darkorange'}}
                         className="single-film__button">
                    {favourites ? 'Убрать из избранного' : 'Добавить в избранное'}
                </button>
            </div>
            <Link to='/' className="single-film__back">Back to all</Link>
        </div>
    )
}

export default SingleFilmPage