import './App.scss';
import BUTTERFLY_ICON from './logo.png';
import { Canvas } from '@react-three/fiber';
import CanvasComponent from './components/canvas_component';
import { Suspense } from 'react';

function App() {
  return (
    <div className='app-container' id="butterfly-model">
      <div className='app-header'>
        <img src={BUTTERFLY_ICON} alt='header-icon' />
      </div>
      <div className='app-canvas' >
        <Canvas shadows>
          <Suspense fallback={null}>
            <CanvasComponent />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
