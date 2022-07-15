import React from 'react';
import PromoText from '../Meals/PromoText';

export default function About() {
  return (
    <>
      <PromoText />
      <h1 style={{ marginTop: '60px', textAlign: 'center', marginBottom: '50px' }}>About</h1>
      <div class="row container" style={{ marginBottom: '150px' }}>
        <div class="col s12 ">
          <div class="card-panel teal">
            <span class="white-text">
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively. I am similar to what is
              called a panel in other frameworks.
            </span>
          </div>
          <div class="card-panel teal">
            <span class="white-text">
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively. I am similar to what is
              called a panel in other frameworks.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
