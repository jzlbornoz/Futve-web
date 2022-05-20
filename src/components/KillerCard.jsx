import React from 'react';
import '../styles/components/killerCard.css';

const KillerCard = ({ killer, handleKiller }) => {

    return (
        <div className='KillerCard' onClick={() => handleKiller(killer)}>
            <div className="KillerCard-item">
                <img src={killer.player.photo} alt="" />
                <div className="KillerCard-info">
                    <h2 className='KillerCard-name'>{killer.player.name}</h2>
                    <ul className="KillerCard-stats">
                        <li className='map'>Goals: {killer.statistics.map(equipo => (<p key={equipo.team.id + killer.name}>{equipo.goals.total}</p>))}</li>
                        <li>Age: {killer.player.age}</li>
                        <li>Country: {killer.player.nationality}</li>
                        <li className='map'>Team: {killer.statistics.map(equipo => (<p key={equipo.team.id + killer.name}>{equipo.team.name}</p>))}</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export { KillerCard };