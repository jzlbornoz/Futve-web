import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/containers/review.css';

const Review = () => {
    const { state } = useContext(AppContext);
    const { select } = state
    return (
        <div className='Review'>
            {select.map(selected => (
                <section key={selected.venue.id}>
                    <h1>DESCRIPCION: {selected.team.name}</h1>
                    <div className="Review-description" >
                        <div className="Review-team">
                            <h3>Logo:</h3>
                            <img src={`https://media.api-sports.io/football/teams/${selected.team.id}.png`}
                                alt={selected.team.name} />
                            <h2>Nombre: {selected.team.name} "{selected.team.code}"</h2>
                            <h2>Fundacion: {selected.team.founded}</h2>
                        </div>
                        <div className="Review-venue">
                            <h3>Ciudad: {selected.venue.city}</h3>
                            <h3>Estadio: {selected.venue.name}</h3>
                            <h3>Direccion: {selected.venue.address}</h3>
                            <h3>Capacidad: {selected.venue.capacity} personas</h3>
                        </div>
                    </div>
                    <img src={selected.venue.image} alt={selected.venue.name} className='Review-stadium' />
                </section>
            ))}
        </div>
    )
}

export { Review };