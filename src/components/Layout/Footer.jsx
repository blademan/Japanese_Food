import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Japanese Food</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Contacts</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  email@example.com
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  +371 2345-535
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 Copyright Text
          <a
            rel="noreferrer"
            className="grey-text text-lighten-4 right"
            href="https://github.com/blademan/Japanese_Food"
            target="_blank">
            Git-Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
