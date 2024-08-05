import { useState } from 'react';
import './App.css';
import Conteiner from './components/Conteiner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Conteiner />
  )
}

export default App
