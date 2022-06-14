import './App.scss'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import FilmList from "../filmList/FilmList";
import SingleFilmPage from "../singleFilmPage/SingleFilmPage";
import {useEffect, useState} from "react";
import FilmServices from "../../services/FilmServices";
import FavouritesList from "../favouritesList/FavouritesList";


function App() {

  const [films, setFilms] = useState([])
  const [countPage, setCountPage] = useState(1)

  const {getTopFilms} = FilmServices();

  useEffect(() => {
    updateFilms()
  }, [countPage])

  const updateFilms = () => {
    getTopFilms(countPage)
        .then(onFilmsListLoaded)
  }

  const onFilmsListLoaded = (filmsList) => {
    setFilms(films => [...films, ...filmsList])
  }

  const upCountPage = () => {
    setCountPage((prevState) => prevState+1)
  }

  const changeFilms = (changeList) => {
    setFilms(changeList)
  }

  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <main>
          <Routes>
            <Route
                path='/'
                element={<FilmList
                films={films}
                upCountPage={upCountPage}/>}>
            </Route>
            <Route
                path='/:filmId'
                element={<SingleFilmPage
                films={films}
                changeFilms={changeFilms}/>}>
            </Route>
            <Route
                path='/favouriteFilms'
                element={<FavouritesList
                films={films}/>}>
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
