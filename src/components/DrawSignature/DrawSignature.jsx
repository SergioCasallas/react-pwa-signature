import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

import "./DrawSignature.css";

function DrawSignature() {
  const [imagenPorVectores, setImagenPorVectores] = useState("");

  const drawRef = useRef();
  const imagenPorVectoresRef = useRef();


  return (
    <div>
      <h1>Firma123123</h1>
      <SignatureCanvas
        ref={drawRef}
        penColor="black"
        backgroundColor="rgba(255,255,255,0.9)"
        canvasProps={{ width: 500, height: 200, className: "123123" }}
      />
      <button
        onClick={() => {
          drawRef.current.clear();
        }}
      >
        borrar
      </button>
      <button
        onClick={() => {
          setImagenPorVectores(drawRef.current.toData());
          imagenPorVectoresRef.current.off(true);
        }}
      >
        save
      </button>

      <button
        onClick={() => {
          imagenPorVectoresRef.current.fromData(imagenPorVectores);
        }}
      >
        ver firma data
      </button>

      <div>
        <SignatureCanvas
          penColor="black"
          backgroundColor="rgba(255,255,255,0.9)"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          ref={imagenPorVectoresRef}
          off
        />
      </div>
    </div>
  );
}

export default DrawSignature;
