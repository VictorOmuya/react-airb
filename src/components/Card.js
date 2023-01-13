import React from 'react'
import star from '../images/star.JPG'



//const name = ["anu", "kola", "tola"]

//const uppercase = name.map(function (names) {
  //  return names[0].toUpperCase()
//})


export default  function Card(props){

    let badgeText
    if (props.item.openspot === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "online"){
        badgeText = "ONLINE"
    }
    
    const url = "../images/player.JPG"

    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src= {props.item.imageUrl} alt="" className='card-image'/> 
            <div className='card-stats'>
                <img src={star} alt="" className='card-star'/>
                <span>{props.item.stats.ratings}</span>
                <span>({props.item.stats.reviewCount}) . </span>
                <span>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>From ${props.item.price} / Person</p>
        </div>
       
    )
}