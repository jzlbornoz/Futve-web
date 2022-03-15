import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { KillerCard } from '../components/KillerCard';
import '../styles/containers/GoalScorer.css'
import { Link } from 'react-router-dom';

const GoalScorer = () => {
    const { killers, loading, addToKiller } = useContext(AppContext);

    const handleKiller = (player) => () => {
        addToKiller(player);
    };

    if (loading) {
        return <Loading />
    } if (killers) {
        return (
            <div className="GoalScorer">
                <div className="GoalScorer-title">
                    <i className="fa-solid fa-bullseye fa-2xl" />
                    <h1>Top GoalScorer</h1>
                </div>
                {killers.map(killer => (
                    <Link to='/goalScorer/review' key={killer.player.id} >
                        <KillerCard killer={killer} handleKiller={handleKiller(killer)} />
                    </Link>
                ))}
            </div>
        )
    }else {
        return <Loading />
    }

}

export { GoalScorer };