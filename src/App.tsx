import React from 'react';
import Quscard from './components/quscard'


const App = () => {

const startTrivia = async () => {

}

const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

}

  return (
   <div className='App'>
    <h1>Qquiz about Computer[💻]</h1>
    <button className='start' onClick={startTrivia}>Start</button>
    <p className='score'>Score:</p>
    <p>Loading Questions...</p>
    {/* < Quscard /> */}
    <button className='next' onClick={nextQuestion}>Next Question</button>
   </div>
  )
}

export default App
