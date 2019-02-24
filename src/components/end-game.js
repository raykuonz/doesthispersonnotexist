import React from 'react';
import EndGameLayout from '../layouts/end-game-layout';
import { ButtonPrimary } from '../layouts/buttons';

const EndGame = ({resetGame, score}) => {

  return (
    <EndGameLayout>
      <h2>You lose!</h2>
      <p>Your score is {score}, you can do better next time!</p>
      <ButtonPrimary onClick={resetGame}>Try again</ButtonPrimary>
    </EndGameLayout>
  );
};

export default EndGame;