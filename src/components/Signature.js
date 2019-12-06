/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Signature = (props) => {
  const user = props.userDetails;

  const style = {
    fontSize: '14px'
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'rgb(0, 0, 0)'
  };

  return (
    <div className='signature'>
      <table cellPadding='0' cellSpacing='0' style={style}>
        <tbody>
          <tr>
            <td>
              {user.firstname || user.lastname ? (
                <h3>
                  <span>{user.firstname}</span>
                  <span>&nbsp;</span>
                  <span>{user.lastname}</span>
                </h3>
              ) : (
                ''
              )}

              {user.jobtitle ? <p>{user.jobtitle}</p> : ''}
              {user.company ? <p>{user.company}</p> : ''}
            </td>
            <td width='30'></td>
            <td width='1' style={{ borderLeft: '1px solid red' }}></td>
            <td width='30'></td>
            <td>
              {user.phone ? (
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
                  <a href={'tel:' + user.phone} style={linkStyle}>
                    <span>{user.phone}</span>
                  </a>
                </p>
              ) : (
                ''
              )}

              {user.website ? (
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
                  <a href={'//' + user.website} style={linkStyle}>
                    <span>{user.website}</span>
                  </a>
                </p>
              ) : (
                ''
              )}

              {user.address.line1 || user.address.line2 ? (
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
                  <span>{user.address.line1}</span>
                  <br />
                  <span
                    style={{
                      marginLeft: '23px',
                      marginTop: '.4em',
                      display: 'block'
                    }}
                  >
                    {user.address.line2}
                  </span>
                </p>
              ) : (
                ''
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Signature;
