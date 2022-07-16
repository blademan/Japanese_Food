import React from 'react';
import PromoText from '../Meals/PromoText';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <PromoText />
      <h1 className={styles.title}>About</h1>
      <div className="row container" style={{ marginBottom: '150px' }}>
        <div className="col s12 ">
          <div className="card-panel teal">
            <span className="white-text">
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively. I am similar to what is
              called a panel in other frameworks.
            </span>
          </div>
          <div className="card-panel teal">
            <span className="white-text">
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively. I am similar to what is
              called a panel in other frameworks.
            </span>
          </div>
          <div className="card-panel teal">
            <span className="white-text">
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively. I am similar to what is
              called a panel in other frameworks.
            </span>
          </div>
          <div className="card-panel teal">
            <span className="white-text">
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
