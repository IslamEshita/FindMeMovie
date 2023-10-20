import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Action from "./components/actionPage";
import Drama from "./components/dramaPage";
import Comedy from "./components/comedyPage";
import Horror from "./components/horrorPage";
import NewForm from "./components/newMovie";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="actionPage" element={<Action />} />
            <Route path="dramaPage" element={<Drama />} />
            <Route path="comedyPage" element={<Comedy />} />
            <Route path="horrorPage" element={<Horror />} />
            <Route path="newMovie" element={<NewForm />} />
            <Route path="movies/:movie_id" element={<MovieInfo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
