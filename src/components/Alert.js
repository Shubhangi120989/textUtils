import React, { useState } from 'react'

function Alert(props) {
    const capitalisze=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
  return (
    //&& used because if props.alert is null then the rest is not implemented
    props.alert&&<div className='alert alert-warning alert-dismissible fade show' role="alert">
        {capitalisze(props.alert.type)} : {props.alert.msg}
        <button type="button" className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button>

    </div>
  )
}

export default Alert
