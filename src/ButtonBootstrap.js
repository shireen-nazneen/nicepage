import React from 'react'
import ButtonSUbmit from './ButtonSUbmit'

function ButtonBootstrap() {
    return (
        <div  className="pt-2 " style={{"width":"900px","height":"600px","position":"relative"}}>
        <img src={"/Untitled1min.jpg"} alt="logo"  style={{"width":"1300px"}}></img> 
        <div className style={{"position":"absolute","top":"150px", "left":"50px"}}>
        <h3 className="text-white text-uppercase font-weight-font-italic" style={{"fontStyle":"italic"}}>B e a u t i f u l</h3>
        <h1 className="text-warning" style={{"fontStyle":"revert"}}>Blooms</h1>
        <h2 className="text-white" style={{"fontStyle":"oblique"}}>For Every Occasion</h2>
        <ButtonSUbmit></ButtonSUbmit>
      </div> 
        
        </div>


    )
} ;

export default ButtonBootstrap
