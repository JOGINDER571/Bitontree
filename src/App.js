import "./App.css";
import { Route, Routes } from "react-router-dom";
import Character from "./Components/cards/Character";
import Location from "./Components/cards/Location";
import Episode from "./Components/cards/Episode";
import CharacterDetail from './Components/characterDetail/CharacterDetail';
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Character/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/episode' element={<Episode/>}/>
        <Route path='/characterdetail/:id' element={<CharacterDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
