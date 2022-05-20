import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import { KillerCard } from '../components/KillerCard';
import '../styles/containers/GoalScorer.css'
import { Link } from 'react-router-dom';

const GoalScorer = () => {
    const { filteredKillers, loading, addToKiller, handleSearch, inputRef, searchK } = useContext(AppContext);

    const handleKiller = (player) => () => {
        addToKiller(player);
    };

    if (loading) {
        return <Loading />
    } if (filteredKillers) {
        return (
            <section className="GoalScorer">
                <div className="GoalScorer-title">
                    <h1>Top GoalScorer</h1>
                    <input type="text" placeholder='Buscar' ref={inputRef} value={searchK} onChange={handleSearch} />
                </div>
                {filteredKillers.length > 0 ? filteredKillers.map(killer => (
                    <Link to='/goalScorer/review' key={killer.player.id} >
                        <KillerCard killer={killer} handleKiller={handleKiller(killer)} />
                    </Link>
                )) : < section className='GoalScorer-empty'>Oops, No Killer</section> }
            </section>
        )
    } else {
        return <Loading />
    }

}

export { GoalScorer };