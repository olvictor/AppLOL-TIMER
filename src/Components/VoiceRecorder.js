import React, { useEffect, useState } from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

const VoiceRecorder = ({TimerAdc,TimerTop,TimerSup}) => {
    const [voice,setVoice] = useState('')
    const commands =[
        {
            command:'* Flash' || '* flash',
            callback: (role)=>{  
                setVoice(role)
                if(role === 'a the' || 'ad' || 'AD'){
                 alert(`AD flashou`)
                 TimerAdc()
                }
            }
        },
    ]
    const { transcript} = useSpeechRecognition({commands});
        console.log(transcript)
  return (

    <div>
        <button onClick={()=>{
            SpeechRecognition.startListening({continuous: true})
        }}>Recorder</button>
        <button onClick={SpeechRecognition.stopListening}>Recorder</button>
        {voice}
    </div>
  )
}

export default VoiceRecorder