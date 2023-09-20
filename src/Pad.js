import React from 'react';



function Pad({handleClick, power, backgroundStyle, element}) {

    return (
      <button 
        type='button'
        className='drum-pad' 
        onClick={handleClick} 
        // id={bank1[element]} 
        disabled={!power} 
        style={{background: `${backgroundStyle}`}}>
        {element}
        {/* <audio id={element} src={bank1[element].source} className='clip'></audio> */}
      </button>
    );
  }