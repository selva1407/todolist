import React from 'react'
import './Footer.css'

const Footer = ({listLength}) => {
  
  return (
    <footer>
      <p className = "footer-p">
        {listLength} List {listLength !== 1 ? "items" : "item"}
      </p>
    </footer>
  )
}

export default Footer;