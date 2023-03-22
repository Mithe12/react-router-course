import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
const Players = React.lazy(() => import('./Players'));
const Teams = React.lazy(() => import('./Teams'));
const TeamPage = React.lazy(() => import('./TeamPage'));
const Player = React.lazy(() => import('./Player'));
const Navbar = React.lazy(() => import('./Navbar'));
const Team = React.lazy(() => import('./Team'));
const Articles = React.lazy(() => import('./Articles'));
const Article = React.lazy(() => import('./Article'));
import Loading from './Loading';

export default function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/players/*' element={<Players />}>
              <Route path=':playerId' element={<Player />} />
              <Route path='' element={
                <div className='sidebar-instruction'> Select a Player</div>
              } />
            </Route>
            <Route path='/teams/*' element={<Teams />}>
              <Route path=':teamName' element={<Team />} />
              <Route path='' element={
                <div className='sidebar-instruction'> Select a Team</div>
              } />
            </Route>
            <Route path='/:teamId' element={<TeamPage />} />
            <Route path='/:teamId/articles/*' element={<Articles />}>
              <Route path=':articleId' element={<Article />} />
              <Route path='' element={
                <div className='sidebar-instruction'> Select a Article</div>
              } />
            </Route>
          </Routes>
        </div>
      </Router>
    </React.Suspense>
  )
}