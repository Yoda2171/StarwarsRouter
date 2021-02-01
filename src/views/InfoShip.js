import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function InfoShip() {
    const { id } = useParams()

    const [state, setState] = useState({})

    useEffect(() => {
        obtengoShips();
    }, [])

    const obtengoShips = async () => {
        const respuesta = await fetch(`https://www.swapi.tech/api/starships/${id}`)
        const data = await respuesta.json();
        setState(data.result.properties)
        
        
    }
    
    return (
        <>
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="" />
                    </div>

                    <div className="col-lg-5">
                        <h1 className="font-weight-light">{state.name}</h1>
                        <ul>
                            <li>
                                <span>Gender: {state.manufacturer}</span>
                            </li>
                            <li>
                                <span>height: {state.starship_class}</span>
                            </li>
                            <li>
                                <span>mass: {state.max_atmosphering_speed}</span>
                            </li>
                       </ul> 
                    </div>
                </div>
                <div className="card text-white my-5 py-4 text-center bg-success">
                    <div className="card-body">
                        <h3 className="text-white m-0">The Force Be With You</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoShip;
