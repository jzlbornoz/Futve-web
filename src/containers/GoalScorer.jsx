import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';

const GoalScorer = () => {
    const { killers, loading } = useContext(AppContext);

    if (loading) {
        return <Loading />
    }else {
        return (
            <div className="GoalScorer">
                {killers.map(killer => (
                    <div>{killer.player.name}</div>
                ))}
            </div>
        )
    }
    
}

export { GoalScorer };