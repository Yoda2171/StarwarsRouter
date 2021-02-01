import React, { useContext } from 'react'
import CardPeople from '../Components/CardPeople';
import { Context } from '../store/appContext';
import InfoPersonaje from './InfoPersonaje';


function Personajes(props) {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>Star Wars People</h1>
            
            
            <CardPeople peoples={!!store.peoples && store.peoples}  />
        </>
    )
}

export default Personajes;
