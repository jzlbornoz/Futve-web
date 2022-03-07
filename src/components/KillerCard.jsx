import React from 'react';
import '../styles/components/killerCard.css';

const KillerCard = ({ killer , handleKiller }) => {

    return (
        <div className='KillerCard' onClick={() => handleKiller(killer)}>
            <div className="KillerCard-item">
                <img src={killer.player.photo} alt="" />
                <div className="KillerCard-info">
                    <h2 className='KillerCard-name'>{killer.player.name}</h2>
                    <h2 className='map'>Goals: {killer.statistics.map(equipo => (<p key={equipo.team.id + killer.name}>{equipo.goals.total}</p>))}</h2>
                    <h2>Age: {killer.player.age}</h2>
                    <h2>Country: {killer.player.nationality}</h2>
                    <h2 className='map'>Team: {killer.statistics.map(equipo => (<p key={equipo.team.id + killer.name}>{equipo.team.name}</p>))}</h2>
                </div>

            </div>

        </div>
    )
}

export { KillerCard };