import React from 'react'
import CardPeople from '../Components/CardPeople';
import Naves from './Naves';
import Personajes from './Personajes'
import Planetas from './Planetas'

function Home() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Planetas />
                    </div>
                    <div className="carousel-item">
                        <Personajes />
                    </div>
                    <div className="carousel-item">
                        <Naves />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="false"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </>
    )
}

export default Home;
