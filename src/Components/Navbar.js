import React, { useContext } from 'react'
import "bootstrap";
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';

function Navbar() {
    const { store, actions } = useContext(Context);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                <Link className="navbar-brand" to="/home">Star Wars</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">

                        <li className="nav-item     ">
                            <Link className="nav-link" to="/personajes">Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/naves">Naves</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planetas">Planetas</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Favoritos
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                                    !!store.favoritos &&
                                    store.favoritos.map((fav, index) => {
                                        return (
                                        <li>
                                         <h5 key={index}> {fav}</h5>
                                        </li>   
                                        )
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
