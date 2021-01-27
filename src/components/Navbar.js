import React from 'react'
import contact from '../images/contact.png'
import '../style/navbar.css'

function navbar() {
    return (
        <div className="navbar_container">
            <div className="brand">
                <img src={contact} alt="logo" />
                <h1>Contacts</h1>
            </div>
            <div className="header">
                <li>Name</li>
                <li>Email</li>
                <li>Phone number</li>
            </div>
        </div>
    )
}

export default navbar
