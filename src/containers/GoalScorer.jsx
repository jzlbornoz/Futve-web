import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { KillerCard } from '../components/KillerCard';
import '../styles/components/GoalScorer.css'

const GoalScorer = () => {
    const { killers, loading } = useContext(AppContext);

    if (loading) {
        return <Loading />
    }else {
        return (
            <div className="GoalScorer">
                {killers.map(killer => (
                    <KillerCard killer={killer} key={killer.player.id}/>
                ))}
            </div>
        )
    }
    
}

export { GoalScorer };