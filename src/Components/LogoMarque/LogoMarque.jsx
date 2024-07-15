import React from 'react'

const LogoMarque = ({ logos }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {logos.map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} className="logo" key={index} />
        ))}
        {logos.map((logo, index) => (
          <img src={logo} alt={`Logo ${index}`} className="logo" key={`clone-${index}`} />
        ))}
      </div>
    </div>  
  )
}

export default LogoMarque