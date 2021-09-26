import "./consumerForm.css";
import MicRecorder from 'mic-recorder-to-mp3';
import { useState } from "react";

//images
import brand from './../../assets/brand.svg'
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const ConsumerForm = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [blobURL, setblobURL] = useState("")
  const [isBlocked, setisBlocked] = useState(false)

  navigator.getUserMedia({ audio: true },
    () => {
      console.log('Permission Granted');
      setisBlocked(false);
    },
    () => {
      console.log('Permission Denied');
      setisBlocked(true);
    },
  );

  const start = () => {
    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          setIsRecording(true);
        }).catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        setIsRecording(false);
        setblobURL(blobURL)
      }).catch((e) => console.log(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div id="consumerFormContainer" className="container">
      <div className="brandContainer">
        <img src={brand} alt="" />
        <hr></hr>
      </div>
      <h2> Hola, Diligenciando la siguiente información estás apoyando al productor <span className="yellow">cafe</span><span className="blue">ter</span><span className="red">o</span> del café que consumiste. Te invitamos a grabar un audio de minimo 10 segundos dónde expreses tu opinión y experiencia que tuviste con el producto. </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input required placeholder="Nombre" type="text"></input>
        <input required placeholder="Edad" type="number" min="15"></input>
        <input required placeholder="Ciudad" type="text" ></input>
        <div className="audioContainer">
          <button className="recordButton" onClick={() => { start() }} disabled={isRecording}>
          </button>
          <button className="stopButton" onClick={() => { stop() }} disabled={!isRecording}>
          </button>
          <audio src={blobURL} controls="controls" />
        </div>
        <input value="Continuar >" type="submit"></input>
        <p style={{color:'white', background:'rgba(0,0,0,.6)', padding: '5px', borderRadius: '10px',marginTop:'10px'}}>*Al dar click en continuar aceptas que se hago uso de la información aquí suministrada para fines exclusivamente informativos en el sector caficultor.</p>
      </form>
    </div>
  );
}

export default ConsumerForm;
