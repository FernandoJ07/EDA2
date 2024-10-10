import React, { useMemo } from 'react';
import { useCounter } from './hooks/useCounter';
import {Small} from './hooks/Small';

const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Vamos en: ', i);
  }

  return `${iterations} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, handleAdd } = useCounter(10);

  const memo = useMemo(()=> heavyStuff(counter), [counter]);


  return (
    <>
      <h1>MemoHook: <Small value={counter} /></h1>
      <hr />

      <h4>{memo}</h4>
      <h4>{memo}</h4>

      <button 
        className="btn btn-primary"
        onClick={() => handleAdd()}
      >
        +1
      </button>

     
    </>
  );
};