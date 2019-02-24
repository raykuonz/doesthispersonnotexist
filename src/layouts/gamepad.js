import styled from 'styled-components';

export const GamePad = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 6px solid #C0B48A;
  border-radius: 30px;
  padding: 12px;
  background-color: #E9E2B4;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.25);

  @media (min-width: 768px) {
    padding: 120px 48px 48px;
  }
`

export const GamePadHeading = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  border-radius: 20px;
  padding: 24px 12px 12px 12px;
  background-color: #EC4B75;
  color: #FFF;
  font-size: 24px;
  text-align: center;
  text-shadow:
    -6px -6px 0 #AA255C,
     0   -6px 0 #AA255C,
     6px -6px 0 #AA255C,
     6px  0   0 #AA255C,
     6px  6px 0 #AA255C,
     0    6px 0 #AA255C,
    -6px  6px 0 #AA255C,
    -6px  0   0 #AA255C;

  @media (min-width: 768px) {
    position: absolute;
    top: 24px;
    left: -24px;
    right: -24px;
    z-index: 1;
    margin-bottom: 0;
    border-radius: 0;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -18px;
      z-index: -1;
      border-top: 9px solid #AA255C;
      border-bottom: 9px solid transparent;
    }

    &:before {
      left: 0;
      border-left: 9px solid transparent;
      border-right: 9px solid #AA255C;
    }

    &:after {
      right: 0;
      border-left: 9px solid #AA255C;
      border-right: 9px solid transparent;
    }
  }
`

export const GamePadContent = styled.div`
  visibility: ${props => (props.isLoading || props.isEndGame) ? 'hidden' : 'visible'};
`

export const GamePadCanvasWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`

export const GamePadCanvas = styled.canvas`
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.25);
`
export const GamePadControl = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
