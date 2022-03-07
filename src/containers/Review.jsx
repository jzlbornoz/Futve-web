import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/containers/review.css';

const Review = () => {
    const { state } = useContext(AppContext);
    const { selectTeam } = state;
    return (
        <div className='Review'>
            <div className="Review-Card">
            {selectTeam.map(selected => (
                <section key={selected.venue.id}>
                    <h1>Review: {selected.team.name}</h1>
                    <div className="Review-description" >
                        <div className="Review-team">
                            <h3>Logo:</h3>
                            <img src={`https://media.api-sports.io/football/teams/${selected.team.id}.png`}
                                alt={selected.team.name} />
                            <h2>Name: {selected.team.name} "{selected.team.code}"</h2>
                            <h2>Since: {selected.team.founded}</h2>
                        </div>
                        <div className="Review-venue">
                            <h3>City: {selected.venue.city}</h3>
                            <h3>Stadium: {selected.venue.name}</h3>
                            <h3>Address: {selected.venue.address}</h3>
                            <h3>Capacity: {selected.venue.capacity} personas</h3>
                        </div>
                    </div>
                    <img src={selected.venue.image} alt={selected.venue.name} className='Review-stadium' />
                </section>
            ))}
            </div>
        </div>
    )
}

export { Review };