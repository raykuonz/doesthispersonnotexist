import styled from 'styled-components';

export const GameStats = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`

export const GameStatItem = styled.div`
  border: 6px solid #C0B48A;
  border-radius: 100px;
  padding: 12px 6px 6px 6px;
  font-size: 14px;
  line-height: 1;
  background-color: #E9E2B4;
  color: #FFF;
  text-shadow:
    -3px -3px 0 #0A0B05,
     0   -3px 0 #0A0B05,
     3px -3px 0 #0A0B05,
     3px  0   0 #0A0B05,
     3px  3px 0 #0A0B05,
     0    3px 0 #0A0B05,
    -3px  3px 0 #0A0B05,
    -3px  0   0 #0A0B05;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.25);

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 12px 24px 6px 24px;
  }
`
