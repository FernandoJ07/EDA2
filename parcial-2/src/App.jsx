import './App.css'
import {Buttons, Display, useCalculator} from './components';

function App() {
  const {input,agregarNumero, agregarOperador, limpiar, borrar, calcular } = useCalculator();
  
  return (
    <>
    <div className="calculadora">
      <Display value={input}/>
      <Buttons 
        agregarNumero={agregarNumero}
        agregarOperador={agregarOperador}
        limpiar={limpiar}
        borrar={borrar}
        calcular={calcular}
      />
      <p className='estudiante'>Fernando Cedeño</p>
    </div>

    </>
  )
}

export default App
