import './App.css'
import "./index.css";

import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';

function App() {
  const [isLoaded, setIsLoading] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-white text-gray-100`}>


      </div>

    </>
  )
}

export default App
