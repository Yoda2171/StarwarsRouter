import React, { useContext } from 'react'
import CardPlanets from '../Components/CardPlanets'
import { Context } from '../store/appContext';


function Planetas(props) {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>Star Wars Planets</h1>
            <CardPlanets planets={!!store.planets && store.planets}/>
        </>
    )
}

export default Planetas;
