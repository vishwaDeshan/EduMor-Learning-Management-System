import React from 'react'

function Button(props) {
  return (
    <div>
      <div className="loginbtn">
        <button type="button" className="button">
          {props.buttonName}
        </button>
        </div>
    </div>
  )
}

export default Button
