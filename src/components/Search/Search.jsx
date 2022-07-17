import { useState } from 'react';
import styles from './search.module.css';

export default function Search({ cb }) {
  const [searchInput, setSearchInput] = useState('');

  const handleKey = (e) => {
    handleSubmit();
  };

  const handleSubmit = () => {
    cb(searchInput);
  };

  const test = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
    handleSubmit();
  };

  return (
    <div className={styles.search}>
      <div className="col s12 container">
        <div className="row">
          <div className="input-field col s12">
            <input
              onKeyDown={handleKey}
              onChange={(e) => test(e)}
              placeholder="Search"
              type="text"
              id="autocomplete-input"
              className="autocomplete"
            />
          </div>

          <button onClick={handleSubmit} className="waves-effect waves-light btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
