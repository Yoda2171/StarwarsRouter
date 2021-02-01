import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';



function CardPeople({ peoples: { description, results } }) {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="row">
                {
                    !!results &&
                    results.length > 0 &&
                    results.map((people, i) => {
                        return (
                            <div className="card h-100" key={i}>
                                <div className="card-body">
                                    {/* <img src="http://placehold.it/300x180" alt="" width="100%" className="img-fluid grayscale" /> */}
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`} alt="" width="100%" className="img-fluid grayscale" />
                                    <h2 className="card-title">{!!people && people.name}</h2>
                                    <p className="card-text">{!!people && people.gender}</p>
                                </div>
                                <div className="card-footer">
                                    <Link to={`/infopersonajes/${i + 1}`} className="btn btn-primary btn-sm">More Info</Link>
                                    <button className='btn btn-lg btn-warning d-block float-right' onClick={() => actions.Favoritos(people.name)}><i class="fas fa-star"></i></button>
                                </div>
                            </div>
 
                        )

                    })
                }








            </div>
        </>
    )
}

export default CardPeople
