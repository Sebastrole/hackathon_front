import "./consumerForm.css";
import MicRecorder from 'mic-recorder-to-mp3';
import { useState } from "react";
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const ConsumerForm = () => {
    const [isRecording,setIsRecording]= useState(false)
    const [blobURL,setblobURL]= useState("")
    const [isBlocked,setisBlocked]= useState(false)

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
    
    return (
        <div class="container">
            Hola world"
            <button onClick={start} disabled={isRecording}>
                Record
            </button>
            <button onClick={stop} disabled={!isRecording}>
                Stop
            </button>
            <audio src={blobURL} controls="controls" />
        </div>
    );
}

function name(params) {

}

export default ConsumerForm;
