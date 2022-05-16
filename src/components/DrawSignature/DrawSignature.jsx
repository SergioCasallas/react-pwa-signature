import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  Container,
  Row,
  Col,
  Collapse,
  Spacer,
  Button,
  Text,
} from '@nextui-org/react';
import SignatureCanvas from 'react-signature-canvas';

import './DrawSignature.css';

function DrawSignature() {
  const [imagenPorVectores, setImagenPorVectores] = useState('');

  const drawRef = useRef();
  const imagenPorVectoresRef = useRef();

  if (imagenPorVectores)
    imagenPorVectoresRef.current.fromData(imagenPorVectores);

  useEffect(() => {
    imagenPorVectoresRef.current.off(true);
  }, []);

  return (
    <>
      <Text
        h1
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}>
        Firma.js
      </Text>
      <Collapse title='Soy una PWA' divider={false}>
        <Text color='$accents6'>
          Instalame. Lorem ipsum blah blah blah dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Button.Group color='secondary' flat>
        <Button
          onClick={() => {
            setImagenPorVectores('');
            drawRef.current.clear();
            imagenPorVectoresRef.current.clear();
          }}>
          Borrar
        </Button>
        <Button
          onClick={() => {
            setImagenPorVectores(drawRef.current.toData());
          }}>
          Guardar
        </Button>
        <Button
          onClick={() => {
            imagenPorVectoresRef.current.fromData(imagenPorVectores);
          }}>
          Ver Firma
        </Button>
      </Button.Group>

      <Spacer />

      <SignatureCanvas
        ref={drawRef}
        onEnd={() => {
          setImagenPorVectores(drawRef.current.toData());
          imagenPorVectoresRef.current.fromData(imagenPorVectores);
        }}
        penColor='black'
        canvasProps={{ className: 'signature' }}
      />
      <SignatureCanvas
        ref={imagenPorVectoresRef}
        penColor='black'
        canvasProps={{ className: 'signature' }}
        off
      />
    </>
  );
}

export default DrawSignature;
