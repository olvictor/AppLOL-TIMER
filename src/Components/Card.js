import React from 'react'

const Card = ({img,spell,timer,onClick, active,role}) => {
    
  return (
    <div className={active ? 'card ativo' :'card'}>
        <img src={img}  alt='img'/>
        <span className='role'>{role}</span>
        <button onClick={onClick}
        style={{
            backgroundImage:`url(${spell})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}></button>
        <p 
        className='timer' 
        style={{display: active ? 'block' : 'none'}}
        disabled={active}
        >
        {timer}
        </p>
    </div>
  )
}

export default Card