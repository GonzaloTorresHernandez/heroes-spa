import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';

import queryString from 'query-string'; //libreria para obtener los query parametros

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation(); // para obtener datos de la ubicacion actual
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);

    const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    }

    return (
        <>

            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {/* {
                        (q === '')
                            ? <div className="alert alert-primary"> Search </div>
                            : (heroes.length === 0) && <div className="alert alert-danger"> Not results with <b>{q}</b></div>
                    } */}


                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none' }}> Search </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none' }}> Not results with <b>{q}</b></div>

                    {
                        heroes.map((heroe) => (
                            <HeroCard key={heroe.id} {...heroe} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};