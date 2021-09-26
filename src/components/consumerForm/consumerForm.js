import "./consumerForm.css";
import axios from 'axios';
import MicRecorder from 'mic-recorder-to-mp3';
import { useState } from "react";
import {useHistory} from "react-router-dom";

//images
import brand from './../../assets/brand.svg'
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const ConsumerForm = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setblobURL] = useState("");
  const [blob, setCurrentBlob] = useState("");
  const [isBlocked, setisBlocked] = useState(false);
  const [buffer, setCurrentBuffer] = useState();
  const [comment, setComment] = useState();
  const [loadingComponent, setLoadingComponent] = useState(false)
  const history = useHistory();

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

  const start = (e) => {
    e.preventDefault();
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

  const stop = (e) => {
    e.preventDefault();
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        setCurrentBlob(blob);
        setIsRecording(false);
        setblobURL(blobURL);
        setCurrentBuffer(buffer);
      }).catch((e) => console.log(e));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingComponent(true);
    let token;
    let conversationID;
    await axios.post("https://api.symbl.ai/oauth2/token:generate", {
      "type": "application",
      "appId": "71794e644a6636464f56667862354e76755557714a68376a5a64584d79687962",
      "appSecret": "654f6c34344c2d556e6d49327952625662344379475f677a42784b664f44497738684b6633382d59474e3749305575483779305541346565305135396c6c3144"
    }, { headers: { 'Content-type': 'application/json' } }).then(res => {
      token = res.data.accessToken;
    })
    let file = new File(buffer, 'thevoice.mp3', {
      type: blob.type,
      lastModified: Date.now()
    });
    var formData = new FormData();
    formData.append("file", file);
    
    await axios.post("https://api.symbl.ai/v1/process/audio?languageCode=es-ES", file, { headers: { 'Authorization':`Berar ${token}`,'x-api-key': token, 'Content-Type': 'audio/mp3'} }).then(res=>{
      conversationID = res.data.conversationId;
    })
    await axios.get(`https://api.symbl.ai/v1/conversations/${conversationID}/messages?sentiment=true`,{headers:{'x-api-key': token}}).then(res=>{
      console.log(res.data)
    })
    setLoadingComponent(false);
    history.push('/home');
  }

  return (
    <div id="consumerFormContainer">
      <div className="brandContainer">
        <img src={brand} alt="" />
        <hr></hr>
      </div>
      <p className="announcement"> Hola estimado(a) consumidor, diligenciando la siguiente información estás apoyando al productor <span className="yellow">cafe</span><span className="blue">ter</span><span className="red">o</span> del café que consumiste. Te invitamos a grabar un audio de minimo 10 segundos dónde expreses tu opinión y experiencia que tuviste con el producto. </p>
      <form className="form" onSubmit={(e) => { handleSubmit(e) }}>
        <input required placeholder="Nombre" type="text"></input>
        <input required placeholder="Edad" type="number" min="15"></input>
        <input required placeholder="Ciudad" type="text" ></input>
        <div className="audioContainer">
          <button className="recordButton" onClick={(e) => { start(e) }} disabled={isRecording}>
          </button>
          <button className="stopButton" onClick={(e) => { stop(e) }} disabled={!isRecording}>
          </button>
          <audio src={blobURL} controls="controls" />
        </div>
          <textarea placeholder="Comentario" disabled={true} value={comment}></textarea>
        {
          !loadingComponent?
          <input value="Continuar >" type="submit"></input>
          : <p className="loadingPoints">. . .</p>
        }
        <p style={{ color: 'white', background: 'rgba(0,0,0,.6)', padding: '10px', borderRadius: '10px', marginTop: '10px' }}>*Al dar click en continuar aceptas que se haga uso de la información aquí suministrada para fines exclusivamente informativos en el sector caficultor.</p>
      </form>
    </div>
  );
}

export default ConsumerForm;
