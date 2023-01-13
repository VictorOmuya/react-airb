import React from 'react'
import neroimage from '../images/nero.JPG'

export default function Nero(){
    return (
        <section className='hero'>
            <img src={neroimage} alt = "" className='hero-photo'/>    
            
            <h1>Online Experiences</h1>   
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind 
                hosts-all without living home</p> 
        
        </section>
    )
}