import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Navbar from "./Navbar";

export default function App () {
  return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/players" element={<Players/>} />
            <Route path='/teams' element={<Teams/>} />
          </Routes>
        </div> 
      </Router>
  )
}