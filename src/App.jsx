import React, { useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // const updateSW = registerSW({
  //   onRegistered(r) {
  //     r &&
  //       setInterval(() => {
  //         r.update()
  //           .then(() => {
  //             console.log('buscando');
  //           })
  //           .catch((err) => {
  //             // console.log('error::::::' + err);
  //             console.log('sin conexion');
  //           });
  //       }, 2000);
  //   },
  //   onOfflineReady() {
  //     setInterval(() => {
  //       r.update()
  //         .then(() => {
  //           location.reload();
  //           console.log('nuevo service');
  //         })
  //         .catch((err) => {
  //           // console.log('error::::::' + err);
  //           console.log('sin conexion');
  //         });
  //     }, 2000);
  //   },
  // });

  return (
    <>
      <ReloadPrompt />
      <div className='App'>
        
      </div>
    </>
  );
}

export default App;
