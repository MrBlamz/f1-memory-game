import { useEffect, useState } from 'react';
import { shuffleArray } from './helpers';
import drivers from './drivers.json';
import Grid from './components/Grid';
import Header from './components/Header';

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [data, setData] = useState([]);
  const [chosen, setChosen] = useState([]);

  const shuffleData = () => setData(shuffleArray(drivers));

  const handleImageClick = (name) => {
    if (chosen.includes(name)) {
      setCurrentScore(0);
      setChosen([]);
    } else {
      setCurrentScore(currentScore + 1);
      setChosen([...chosen, name]);
    }

    shuffleData();
  };

  useEffect(() => {
    shuffleData();
  }, []);

  useEffect(() => {
    if (currentScore > highestScore) setHighestScore(currentScore);
  }, [currentScore, highestScore]);

  return (
    <div className='App'>
      <Header
        title='F1 Memory Game'
        currentScore={currentScore}
        highestScore={highestScore}
      />
      <Grid data={data} handleImageClick={handleImageClick} />
    </div>
  );
}

export default App;
