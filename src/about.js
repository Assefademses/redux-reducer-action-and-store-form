import React from 'react'

const About = ({countMe, dec}) => {

    const clickMe = (text) => {
        alert(text)
    }
    const ffname = "Assefa Demses"

  return (
    <div>
      <About myFname={ffname} />
   <button >{countMe}</button>
   <button onClick={()=>dec()} >-</button>

    </div>
  )

}

export default About