import React, { Component } from 'react';
import { randomAvatar, drawCanvas } from './utils/helpers';
import Result from './components/result';
import Loading from './components/loading';
import EndGame from './components/end-game';
// import './App.css';

import { ButtonPrimary, ButtonSecondary } from './layouts/buttons';
import { GamePad, GamePadCanvasWrapper, GamePadContent, GamePadCanvas, GamePadHeading, GamePadControl } from './layouts/gamepad';
import GameLayout from './layouts/game-layout';
import { GameStats, GameStatItem } from './layouts/game-stats';

import GlobalStyle from './layouts/global';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isReal: false,
      isLoading: false,
      score: 0,
      life: 3,
      isShowingResult: false,
      result: false,
      wrongResult: false,
      isEndGame: false,
      questionNumber: 1
    };
    this.toggleLoading = this.toggleLoading.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.wrongAnswer = this.wrongAnswer.bind(this);
    this.toggleDisplayResult = this.toggleDisplayResult.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  
  componentDidMount() {
    this.generateQuestion();
  }
  
  toggleLoading() {
    this.setState({isLoading: !this.state.isLoading});
  }
  
  generateQuestion() {
    const { avatar, isReal } = randomAvatar();
    this.setState({isReal: isReal, isLoading: true});
    drawCanvas(this.refs.canvas, avatar, this.toggleLoading);
  }
  
  answerQuestion(answer) {
    if (answer !== this.state.isReal) {
      this.wrongAnswer();
    } else {
      this.correctAnswer();
    }
    this.generateQuestion();
  }
  
  correctAnswer() {
    this.setState({
      score: this.state.score + 100,
      result: true,
      questionNumber: this.state.questionNumber + 1
    }, this.toggleDisplayResult);
  }
  
  wrongAnswer() {
    
    if (this.state.life <= 1) {
      this.setState({
        isEndGame: true,
        life: 0,
      });
      return;
    }
    
    this.setState({
      life: this.state.life - 1,
      result: false,
      wrongResult: this.state.isReal,
      questionNumber: this.state.questionNumber + 1
    }, this.toggleDisplayResult);
  }
  
  toggleDisplayResult() {
    this.setState({
      isShowingResult: true
    });
  }
  
  resetGame() {
    this.setState({
      score: 0, 
      life: 3,
      isShowingResult: false,
      isEndGame: false,
      questionNumber: 1
    });
  }
  
  render() {
    const { 
      isLoading, 
      score, 
      life, 
      isShowingResult, 
      result,
      wrongResult,
      isEndGame,
      questionNumber      
    } = this.state;
    
    return(
      <>
        <GlobalStyle />
        <GameLayout>
          <GameStats>
            <GameStatItem>
              Question:&nbsp;&nbsp;{questionNumber}
            </GameStatItem>
            <GameStatItem>
              Score:&nbsp;&nbsp;{score}
            </GameStatItem>
            <GameStatItem>
              Life:&nbsp;&nbsp;{life}
            </GameStatItem>
          </GameStats>
          <GamePad>
            <GamePadHeading>Does this person not exist?</GamePadHeading>
            <GamePadContent isLoading={isLoading} isEndGame={isEndGame}>
              <GamePadCanvasWrapper>
                <GamePadCanvas ref='canvas' />
              </GamePadCanvasWrapper>
              <GamePadControl>
                <ButtonPrimary onClick={_ => this.answerQuestion(false)} disabled={isLoading}>Not Exist</ButtonPrimary>
                <ButtonSecondary onClick={_ => this.answerQuestion(true)} disabled={isLoading}>Exist</ButtonSecondary> 
              </GamePadControl>
            </GamePadContent>
            {isLoading && !isEndGame ? 
              <Loading>
                {isShowingResult ? <Result result={result} answer={wrongResult} /> : null}
              </Loading> 
              : null} 
            {isEndGame ? <EndGame resetGame={this.resetGame} score={score}/> : null}
          </GamePad>
        </GameLayout>
      </>
    );
  }
}

export default App;
