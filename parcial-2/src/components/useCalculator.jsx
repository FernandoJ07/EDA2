import { useState } from 'react';

export const useCalculator = () => {
  const [input, setInput] = useState('');

  const agregarNumero = (num) => {
    setInput(input + num);
  };

  const agregarOperador = (operador) => {
    if (input === '' && operador === '-') {
      setInput(input + operador);
    } else if (input !== '' && !isNaN(input[input.length - 1])) {
      setInput(input + operador);
    }
  };

  const limpiar = () => {
    setInput('');
  };

  const borrar = () => {
    setInput(input.slice(0, -1));
  };

  const calcular = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return {
    input,
    agregarNumero,
    agregarOperador,
    limpiar,
    borrar,
    calcular
  };
};

