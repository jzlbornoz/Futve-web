import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/teamCard.css';

const TeamCard = () => {
    const { team, addToSelect } = useContext(AppContext);

    const handleSelect = item => () => {
        addToSelect(item);
    }
    return (
        <div className='TeamCard' >
            {team.map(item => (
                <Link to='/review' key={item.team.id}>
                <div className='TeamCard-item' key={item.team.id} onClick={handleSelect(item)}>
                    <img className='item-logo' src={`https://media.api-sports.io/football/teams/${item.team.id}.png`} alt="" />
                    <div className='item-text'>
                        <h2>{item.team.name}</h2>
                        <h4>{item.venue.city}</h4>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}

export { TeamCard }