import React from 'react';
import PromoText from '../Meals/PromoText';

export default function Contacts() {
  return (
    <>
      {' '}
      <PromoText />
      <h1 cl className="center" style={{ marginTop: '50px' }}>
        Contacts
      </h1>
      <div className="row container">
        <form className="col s12 ">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" id="first_name" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" id="last_name" type="text" className="validate" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Password" id="password" type="password" className="validate" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Email" id="email" type="email" className="validate" />
            </div>
          </div>
          <div className="row"></div>
          <button className="waves-effect waves-light btn">button</button>
        </form>
      </div>
    </>
  );
}
