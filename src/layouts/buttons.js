import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 100px;
  padding: 18px 12px 6px 12px;
  font-size: 24px;
  line-height: 1;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.25);
  cursor: pointer;
  transition: transform 0.1s ease-out,
              box-shadow 0.1s ease-out;

  @media (min-width: 768px) {
    padding: 18px 24px 6px 24px;
    font-size: 36px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.15);
  }

  &:active {
    transform: scale(0.9);
    box-shadow: 0 2px 3px 0 rgba(0,0,0,0.5);
  }
`

export const ButtonPrimary = styled(Button)`
  color: #9E0B1A;
  background-image: linear-gradient(to bottom, #FFEA38, #FFC838);
`

export const ButtonSecondary = styled(Button)`
  color: #1D4500;
  background-image: linear-gradient(to bottom, #CDF115, #74DA14);
`