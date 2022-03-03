import React from 'react';
import '../styles/components/killerCard.css';

const KillerCard = ({ killer }) => {

    return (
        <div className='KillerCard'>
            <div className="KillerCard-item">
                <img src={killer.player.photo} alt="" />
                <div className="info">
                    <h2>{killer.player.name}</h2>
                    <h3 className='map'>Goles:{killer.statistics.map(equipo => (<p key={equipo.team.id + killer.name}>{equipo.goals.total}</p>))}</h3>
                    <h3>Edad:{killer.player.age}</h3>
                    <h3>Pais:{killer.player.nationality}</h3>
                    <h3 className='map'>Equipo:{killer.statistics.map(equipo => (<p key={equipo.team.id + killer.name}>{equipo.team.name}</p>))}</h3>
                </div>

            </div>

        </div>
    )
}

export { KillerCard };