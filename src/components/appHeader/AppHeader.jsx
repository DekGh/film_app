import './appHeader.scss'
import {NavLink} from "react-router-dom";

const AppHeader = () => {


    return (
        <header className="app__header">
            <h1 className="app__title">
                    <span>Film</span> information portal
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                        end
                        style={({isActive}) => ({color: isActive ? 'cornflowerblue' : 'inherit'})}
                        to={'/films'}>Film List</NavLink></li>
                    /
                    <li><NavLink
                        end
                        style={({isActive}) => ({color: isActive ? 'cornflowerblue' : 'inherit'})}
                        to={'/favouriteFilms'}>Favourites</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader