import React from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';

const theme = createTheme({
  type: 'dark',
});

import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt';
import DrawSignature from './components/DrawSignature/DrawSignature';
import './App.css';

function App() {
  return (
    <NextUIProvider theme={theme}>
      <Container
        lg
        id='main-container'
        className='main-container'
        // gap={0}
        css={{
          dflex: 'center',
          flexDirection: 'column',
        }}>
        <ReloadPrompt />
        <DrawSignature />
      </Container>
    </NextUIProvider>
  );
}

export default App;
