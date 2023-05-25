import './App.css';
import Card from './Components/Card';
import top from './Assets/top.png';
import sup from './Assets/sup.png';
import mid from './Assets/mid.png';
import jg from './Assets/jg.png';
import adc from './Assets/adc.png';
import flash from './Assets/flash.png';
import { useState } from 'react';



function App() {
  let [flashTopTimer, setFlashTopTimer] = useState(300)
  let [flashAdTimer, setFlashAdTimer] = useState(300)
  let [flashMidTimer, setFlashMidTimer] = useState(300)
  let [flashJgTimer, setFlashJgTimer] = useState(300)
  let [flashSupTimer, setFlashSupTimer] = useState(300)
  const [ativoTop,setAtivoTop] = useState(false)
  const [ativoJg,setAtivoJg] = useState(false)
  const [ativoMid,setAtivoMid] = useState(false)
  const [ativoAdc,setAtivoAdc] = useState(false)
  const [ativoSup,setAtivoSup] = useState(false)
  
  const TimerTop = ()=>{

      setInterval((e)=>{
        setFlashTopTimer(flashTopTimer--)
      },1000)
      setAtivoTop(true)
  }

  const TimerAd = ()=>{

    setInterval((e)=>{
      setFlashAdTimer(flashAdTimer--)
    },1000)
    setAtivoAdc(true)
}
const TimerMid = ()=>{

  setInterval((e)=>{
    setFlashMidTimer(flashMidTimer--)
  },1000)
  setAtivoMid(true)
}
const TimerJg = ()=>{

  setInterval((e)=>{
    setFlashJgTimer(flashJgTimer--)
  },1000)
  setAtivoJg(true)
}
const TimerSup = ()=>{
  setAtivoSup(true)
  setInterval(()=>{
    if(flashSupTimer >= 0){
      setFlashSupTimer(flashSupTimer--)
    
    }if(flashSupTimer === 0){
      alert('Flash Sup Voltou')
    }
  },10)

}
if(flashSupTimer === 0){
  setAtivoSup(false)
  setFlashSupTimer(300)
}

  return (
   <section>
      <Card img={top} spell={flash}  timer={flashTopTimer} onClick={TimerTop} active={ativoTop}/>
      <Card img={jg} spell={flash}  timer={flashJgTimer} onClick={TimerJg} active={ativoJg}/>
      <Card img={mid} spell={flash}  timer={flashMidTimer} onClick={TimerMid} active={ativoMid}/>
      <Card img={adc} spell={flash}  timer={flashAdTimer} onClick={TimerAd} active={ativoAdc}/>
      <Card img={sup} spell={flash}  timer={flashSupTimer} onClick={TimerSup} active={ativoSup}/>
   </section>
  );
}

export default App;
