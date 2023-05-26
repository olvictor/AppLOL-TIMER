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
  let [flashAdcTimer, setFlashAdctimer] = useState(300)
  let [flashMidTimer, setFlashMidTimer] = useState(300)
  let [flashJgTimer, setFlashJgTimer] = useState(300)
  let [flashSupTimer, setFlashSupTimer] = useState(300)
  const [ativoTop,setAtivoTop] = useState(false)
  const [ativoJg,setAtivoJg] = useState(false)
  const [ativoMid,setAtivoMid] = useState(false)
  const [ativoAdc,setAtivoAdc] = useState(false)
  const [ativoSup,setAtivoSup] = useState(false)
  
  const TimerTop = ()=>{
    setAtivoTop(true)
    setInterval(()=>{
      if(flashTopTimer >= 0){
        setFlashTopTimer(flashTopTimer--)
      
      }if(flashTopTimer === 0){
        alert('Flash Ad Voltou')
      }
    },1000)
  
  }

  const TimerAdc = ()=>{
    setAtivoAdc(true)
    setInterval(()=>{
      if(flashAdcTimer >= 0){
        setFlashAdctimer(flashAdcTimer--)
      
      }if(flashAdcTimer === 0){
        alert('Flash Ad Voltou')
      }
    },1000)
  
  }
  
const TimerMid = ()=>{
  setAtivoMid(true)
  setInterval(()=>{
    if(flashMidTimer >= 0){
      setFlashMidTimer(flashMidTimer--)
    
    }if(flashMidTimer === 0){
      alert('Flash Mid Voltou')
    }
  },1000)

}

const TimerJg = ()=>{
  setAtivoJg(true)
  setInterval(()=>{
    if(flashJgTimer >= 0){
      setFlashJgTimer(flashJgTimer--)
    
    }if(flashJgTimer === 0){
      alert('Flash Jg Voltou')
    }
  },1000)

}

const TimerSup = ()=>{
  setAtivoSup(true)
  setInterval(()=>{
    if(flashSupTimer >= 0){
      setFlashSupTimer(flashSupTimer--)
    
    }if(flashSupTimer === 0){
      alert('Flash Sup Voltou')
    }
  },1000)

}
if(flashSupTimer === 0){
  setAtivoSup(false)
  setFlashSupTimer(300)
}

if(flashAdcTimer === 0){
  setAtivoAdc(false)
  setFlashAdctimer(300)
}

if(flashTopTimer === 0){
  setAtivoTop(false)
  setFlashTopTimer(300)
}
if(flashMidTimer === 0){
  setAtivoMid(false)
  setFlashMidTimer(300)
}
if(flashJgTimer === 0){
  setAtivoJg(false)
  setFlashJgTimer(300)
}
  return (
   <section>
      <Card img={top} spell={flash}  timer={flashTopTimer} onClick={TimerTop} active={ativoTop} role='TOP'/>
      <Card img={jg} spell={flash}  timer={flashJgTimer} onClick={TimerJg} active={ativoJg} role='JG'/>
      <Card img={mid} spell={flash}  timer={flashMidTimer} onClick={TimerMid} active={ativoMid} role='MID'/>
      <Card img={adc} spell={flash}  timer={flashAdcTimer} onClick={TimerAdc} active={ativoAdc} role='ADC'/>
      <Card img={sup} spell={flash}  timer={flashSupTimer} onClick={TimerSup} active={ativoSup} role='SUP'/>
   </section>
  );
}

export default App;
