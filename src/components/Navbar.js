import React from 'react'

export default function Navbar(){
    const url = "airbnb_logo_detail.jpg"
    return (
        <nav>
            <img src={require(`../images/${url}`)} alt='' />
        </nav>
    )
}