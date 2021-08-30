import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className='App'>
      <Header
        title='Memory Game'
        currentScore={currentScore}
        highestScore={highestScore}
      />
    </div>
  );
}

export default App;
