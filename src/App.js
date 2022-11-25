import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
    const [paramA, setParamA] = useState('')
    const [paramB, setParamB] = useState('')

    const [resultado, setResultado] = useState('Exemplo Resultado')

    const handleParamAChange = (event) =>{
        setParamA(event.target.value)
    }


    const handleParamBChange = (event) =>{
        setParamB(event.target.value)
    }

    const handleSuma=(event)=>{

        setResultado(Number(paramA)+Number(paramB))

    }
    const handleResta=(event)=>{
        setResultado(paramA+' restado a ' +paramB)
    }
    const handleMultiplicacion=(event)=>{
        setResultado(paramA+' multiplicado a ' +paramB)
    }
    const handleDivision=(event)=>{
        setResultado(paramA+' divide a ' +paramB)
    }

  return (
    <div className="App">
      <header className="App-header">

        <div>Bienvenido a Calcu</div>
          <div>Proporcione sus numeros para calcular</div>
          <div>a: <input onChange={handleParamAChange}  /> </div>
          <div>b: <input onChange={handleParamBChange}/>  </div>
          <button onClick={handleSuma} >Suma</button>
          <button onClick={handleResta}>Resta</button>
          <button onClick={handleMultiplicacion}>Multiplicacion</button>
          <button onClick={handleDivision}>Division</button>
          <div>Resultado: <div>{resultado} </div> </div>
      </header>
    </div>
  );
}

export default App;
