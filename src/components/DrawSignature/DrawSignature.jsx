import React, { useState, useRef } from 'react';
import { Button, Text } from '@nextui-org/react';
import SignatureCanvas from 'react-signature-canvas';

import './DrawSignature.css';

function DrawSignature() {
  const [imagenPorVectores, setImagenPorVectores] = useState('');

  const drawRef = useRef();
  const imagenPorVectoresRef = useRef({});

  return (
    <div>
      <Text h1>Firma</Text>
      <SignatureCanvas
        ref={drawRef}
        penColor='black'
        backgroundColor='rgba(255,255,255,0.9)'
        canvasProps={{ width: 500, height: 200, className: '123123' }}
      />
      <button
        onClick={() => {
          drawRef.current.clear();
        }}>
        borrar
      </button>
      <button
        onClick={() => {
          setImagenPorVectores(drawRef.current.toData());
        }}>
        save
      </button>

      <button
        onClick={() => {
          imagenPorVectoresRef.current.fromData(imagenPorVectores);
        }}>
        ver firma data
      </button>

      <Button auto>Borrar</Button>
      <Button auto>Guardar</Button>
      <Button auto>Ver fima guardada</Button>

      <div>
        <SignatureCanvas
          penColor='black'
          backgroundColor='rgba(255,255,255,0.9)'
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          ref={imagenPorVectoresRef}
          off
        />
      </div>
    </div>
  );
}

export default DrawSignature;
