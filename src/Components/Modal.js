import React from 'react'
import "./Modal.css"

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Do you want to continue</h1>
        </div>
        <div className="body">
          <p>The next page is awesome! You should move forward, you will enjoy.</p>
        </div>
        <div className="footer">
          <button id='contBtn'>Continue</button>
          <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal