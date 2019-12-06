import React from 'react'
import Signature from './Signature'

const Preview = (props) => {

  return (
    <div className="preview">

      <div className="preview__inner">
        <div className="preview__text">
          <p>Dear you,</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi recusandae amet in omnis, modi officiis consequatur laudantium quaerat accusamus necessitatibus voluptas. Ipsa dolorum itaque suscipit quisquam voluptatem aliquid. Quas!
            </p>
            <p>Best regards,</p>
        </div>
        <div className="signature__wrapper">
          <Signature userDetails={props.userDetails}/>
        </div>
      </div>
    </div>
  )
}

export default Preview
