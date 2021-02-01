import { useParams } from "react-router-dom"

const { id } = useParams
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            starships: null,
            peoples: null,
            planets: null,
            infoPeoples: null,
            favoritos: []
        },
        actions: {
            a: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            starships: data,

                        })
                    })
            },

            b: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            peoples: data,

                        })
                        console.log(data)
                    })

            },
            bA: () => {
                fetch(`https://www.swapi.tech/api/people/${id}`)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            infoPeoples: data,

                        })
                        console.log(data)
                    })

            },
            c: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            planets: data,


                        })
                    })
            },
            Favoritos: (name) => {
                
                let store = getStore();
                setStore({
                    
                    favoritos: store.favoritos.concat(name)
                    
                    
                });
                console.log(name)
            },
        }
    }
}

export default getState;