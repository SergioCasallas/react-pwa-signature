import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';

import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt';
import DrawSignature from './components/DrawSignature/DrawSignature';

import './App.css';

function App() {
  return (
    <NextUIProvider>
      <ReloadPrompt />
      <div className='App'>
        <DrawSignature />
      </div>
    </NextUIProvider>
  );
}

export default App;
