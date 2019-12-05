/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Signature = () => {
  const style = {};
  const linkStyle = {
    textDecoration: "none",
    color: "rgb(0, 0, 0)"
  };
  //  'text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;'

  return (
    <div className='signature'>
      <table cellPadding='0' cellSpacing='0' style={style}>
        <tbody>
          <tr>
            <td>
              <h3>
                <span>John</span>
                <span>&nbsp;</span>
                <span>Smith</span>
              </h3>
              <p>Marketer</p>
              <p>Wardi's</p>
            </td>
            <td width='30'></td>
            <td width='1' style={{ borderLeft: '1px solid red' }}></td>
            <td width='30'></td>
            <td>
              <p>
                <span>
                  <img
                    width='13'
                    src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png'
                    style={{
                      backgroundColor: 'rgb(242, 84, 125)',
                      marginRight: '10px'
                    }}
                  />
                </span>
                <a href='tel:' style={linkStyle}>
                  <span>111 222 3333</span>
                </a>
              </p>
              <p>
                <span>
                  <img
                    width='13'
                    src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png'
                    style={{
                      backgroundColor: 'rgb(242, 84, 125)',
                      marginRight: '10px'
                    }}
                  />
                </span>
                <a href='//www.wardi-s.com' style={linkStyle}>
                  <span>www.wardi-s.com</span>
                </a>
              </p>
              <p>
                <span>
                  <img
                    width='13'
                    src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png'
                    style={{
                      backgroundColor: 'rgb(242, 84, 125)',
                      marginRight: '10px'
                    }}
                  />
                </span>
                <span>line 1, line 2, line 3, line 4</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Signature;
