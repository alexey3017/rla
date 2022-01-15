import { useState } from 'react';
import './App.css';
import { EmptyBlock } from './components/EmptyBlock';
import { Phrase } from './components/Phrase';
import { adjectivesArr, nounsArr } from './utils/bd';

function App() {
  const [phrasesList, setItemPhrasesList] = useState([]);

  const clearPhrase = () => {
    setItemPhrasesList([]);
  };

  const getRandomWord = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  const generatePhrase = () => {
    setItemPhrasesList([
      ...phrasesList,
      getRandomWord(adjectivesArr) +
        ' ' +
        getRandomWord(adjectivesArr) +
        ' ' +
        getRandomWord(nounsArr),
    ]);
  };
  return (
    <div className="wrapper">
      {phrasesList.length > 0 ? <Phrase phrasesList={phrasesList} /> : <EmptyBlock />}
      <button className="btn btn_generate" onClick={generatePhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearPhrase}>
        Очистить
      </button>
    </div>
  );
}

export default App;
