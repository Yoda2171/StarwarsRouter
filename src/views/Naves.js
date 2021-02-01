import React, { useContext } from 'react'
import CardShip from '../Components/CardShip'
import { Context } from '../store/appContext';

function Naves(props) {
    const { store, actions } = useContext (Context);
    return (
        <>

            <h1>Star wars Ships</h1>
            <CardShip starships={!!store.starships && store.starships}/>
            
        </>
    )
}

export default Naves
