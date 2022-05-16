import React from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import themeJson from './theme.js';

import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt';
import DrawSignature from './components/DrawSignature/DrawSignature';
import './App.css';

function App() {
  return (
    <>
      <NextUIProvider theme={createTheme(themeJson)}>
        <ReloadPrompt />
        <div className='app'>
          <DrawSignature />
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;
