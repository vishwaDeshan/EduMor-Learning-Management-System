import React from 'react'

function InputBox(props) {
  return (
    <div>
      <label className="inputbox">
            <h6 style={{fontWeight:600}}> {props.title}: </h6>
            <input className="inputfield" type={props.type} name="username" placeholder={props.placeholder?props.placeholder:""} />
        </label>
    </div>
  )
}

export default InputBox;