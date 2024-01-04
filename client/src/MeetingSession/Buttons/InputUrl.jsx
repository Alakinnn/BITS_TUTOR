import React from 'react'

function InputUrl({handleChangeFunction , startSessionFunction}) {

  return (
    <div className="buttons">
        <input 
            type="url"
            placeholder="Live Share URL"
            onChange={handleChangeFunction}
        />
        <button className="blueButton btn-dark" onClick={startSessionFunction}>Start Session</button>
    </div> 
  )
}

export default InputUrl