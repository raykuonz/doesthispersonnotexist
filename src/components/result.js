import React from 'react';
import { ResultLayout, ResultHeading } from '../layouts/result-layout';

const Result = ({result, answer}) => (
  <ResultLayout>
    {result 
      ? 'Correct answer!' 
      : `Wrong answer! This is a ${answer ? 'real' : 'fake'} person!`}
    <ResultHeading>
      {result
        ? 'Score +100'
        : 'Life -1'}
    </ResultHeading>
  </ResultLayout>
);

export default Result;
