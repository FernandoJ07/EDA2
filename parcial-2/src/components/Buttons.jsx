import React from 'react';
import {Button} from './Button';

export const Buttons = ({ agregarNumero, agregarOperador, limpiar, borrar, calcular }) => {
  return (
    <div className="botones">
      <Button text="C" onClick={limpiar} />
      <Button text="←" onClick={borrar} className="borrar" />
      <Button text="÷" onClick={() => agregarOperador("/")} />
      <Button text="7" onClick={() => agregarNumero(7)} />
      <Button text="8" onClick={() => agregarNumero(8)} />
      <Button text="9" onClick={() => agregarNumero(9)} />
      <Button text="×" onClick={() => agregarOperador("*")} />
      <Button text="4" onClick={() => agregarNumero(4)} />
      <Button text="5" onClick={() => agregarNumero(5)} />
      <Button text="6" onClick={() => agregarNumero(6)} />
      <Button text="-" onClick={() => agregarOperador("-")} />
      <Button text="1" onClick={() => agregarNumero(1)} />
      <Button text="2" onClick={() => agregarNumero(2)} />
      <Button text="3" onClick={() => agregarNumero(3)} />
      <Button text="+" onClick={() => agregarOperador("+")} />
      <Button text="0" onClick={() => agregarNumero(0)} className="cero" />
      <Button text="." onClick={() => agregarNumero(".")} />
      <Button text="=" onClick={calcular} />
    </div>
  );
};

