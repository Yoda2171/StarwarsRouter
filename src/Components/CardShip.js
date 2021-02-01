import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


function CardShip({ starships: { description, results } }) {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="row">
                {
                    !!results &&
                    results.length > 0 &&
                    results.map((starship, i) => {
                        return (
                            <div className="card h-100" key={i}>
                                <div className="card-body">
                                    {/* <img src="http://placehold.it/300x180" alt="" width="100%" className="img-fluid grayscale" /> */}
                                    <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} className="card-img-top img-fluid" />
                                    <h2 className="card-title">{starship.name}</h2>
                                    <p className="card-text">{ }</p>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/infoship/${starship.uid}`} className="btn btn-primary btn-sm">More Info</Link>
                                    <button className='btn btn-lg btn-warning d-block float-right' onClick={() => actions.Favoritos(starship.name)}><i class="fas fa-star"></i></button>
                                </div>
                            </div>

                            )

                        })
                    }
                </div>
            </>
        )
    }

    export default CardShip
