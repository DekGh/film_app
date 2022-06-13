import './filmList.scss'
import {Link} from "react-router-dom";

const FilmList = ({films, upCountPage}) => {

    function renderItems(arr) {
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

    const items = renderItems(films)

    return (
        <div className="film__list">
            {items}
            <button
                className="film__button"
                onClick={() => upCountPage()}>
                <div className="inner">LOAD MORE</div>
            </button>
        </div>
    )
}

export default FilmList