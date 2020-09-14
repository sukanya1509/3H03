import React from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';

const word = "hello";
function App() {
  return (
    <div>
 {
 Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
 }
 </div>
    );

}

export default App;
