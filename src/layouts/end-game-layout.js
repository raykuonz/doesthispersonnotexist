import styled from 'styled-components';

const EndGameLayout = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 96px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 0;
  }
`

export default EndGameLayout;