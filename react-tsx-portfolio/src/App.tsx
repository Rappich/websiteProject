import './App.css'
import "./index.css";

import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';

function App() {
  const [isLoaded, setIsLoading] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
    </>
  )
}

export default App
