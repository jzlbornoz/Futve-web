import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/containers/killerReview.css';

const KillerReview = () => {
    const { state } = useContext(AppContext);
    const { selectKiller } = state
    return (
        <div className="KillerReview">
            <div className="KillerReview-wrapped">
                {selectKiller.map(player => (
                    <div className='Player-Card' key={player.player.id + player.player.weight}>
                        <div className="Player-info">
                            <div className='Player-name'>
                                <i className="fa-solid fa-circle-user fa-2xl" />
                                <h1>{player.player.name}</h1>
                            </div>
                            <img src={player.player.photo} alt={player.player.name} />
                            <p>Age:{' ' + player.player.age}</p>
                            <p>Nationality: {' ' + player.player.nationality}</p>
                            <p>Weight:{' ' + player.player.weight}</p>
                            <p>Height:{' ' + player.player.height}</p>
                        </div>
                        <div className="Player-statistics">
                            <h2>Statistics:</h2>
                            {player.statistics.map(statistic => (
                                <div className='Statistics-card' key={statistic.team.id}>
                                    <p><b>Position:</b>{' ' + statistic.games.position}</p>
                                    <p><b>Games:</b> {' ' + statistic.games.appearences}</p>
                                    <p><b>Minutes:</b>  {' ' + statistic.games.minutes}</p>
                                    <p><b>Goals:</b> {statistic.goals.total}</p>
                                    <p><b>Assists:</b> {!statistic.goals.assist ? '0' : statistic.goals.assist}</p>
                                    <p><b>YellowCard:</b>{' ' + statistic.cards.yellow}</p>
                                    <p><b>RedCard:</b> {statistic.cards.red}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { KillerReview }