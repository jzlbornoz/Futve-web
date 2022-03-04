import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { KillerCard } from '../components/KillerCard';
import '../styles/containers/GoalScorer.css'

const GoalScorer = () => {
    const { killers, loading } = useContext(AppContext);

    if (loading) {
        return <Loading />
    }else {
        return (
            <div className="GoalScorer">
                <h1>Top GoalScorer</h1>
                {killers.map(killer => (
                    <KillerCard killer={killer} key={killer.player.id}/>
                ))}
            </div>
        )
    }
    
}

export { GoalScorer };