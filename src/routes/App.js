import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useTeam } from '../hooks/useTeam';
import { Home } from '../containers/Home';
import { Layout } from '../components/Layout';
import { Review } from '../containers/Review';
import { NotFound } from '../containers/NotFound';
import { GoalScorer} from '../containers/GoalScorer.jsx';
import { KillerReview } from '../containers/KillerReview';
import { Team } from '../components/Team';

const App = () => {
  const intialValue = useTeam();
  return (
    <AppContext.Provider value={intialValue}>
      <BrowserRouter>
        <Layout >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/teams" element={<Team />} />
            <Route exact path="/review" element={<Review />} />
            <Route exact path="/goalScorer" element={<GoalScorer />} />
            <Route exact path="/goalScorer/review" element={<KillerReview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
