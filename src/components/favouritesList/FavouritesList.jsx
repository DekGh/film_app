import '../filmList/filmList.scss'
import {Link} from "react-router-dom";

const FavouritesList = ({films}) => {

    const favouritesFilms = films.filter((film) => film.favourites)

    function renderItems(arr) {
        console.log(arr)
        const items = arr.map(items => {

            return (
                <li
                    className='film__item'
                    key={items.filmId}>
                    <Link to={`/${items.filmId}`}>
                        <img src={items.posterUrl} alt={items.nameRu} className="film__item__img"/>
                        <div className="film__name">{items.nameRu}</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className="film__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(favouritesFilms)

    return (
        <div className="film__list">
            {items}
        </div>
    )
}
export default FavouritesList;