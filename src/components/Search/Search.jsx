import { useState } from 'react';

export default function Search({ cb }) {
  const [searchInput, setSearchInput] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(searchInput);
  };

  return (
    <div className="row container">
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              onKeyDown={handleKey}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search"
              type="text"
              id="autocomplete-input"
              className="autocomplete"
            />
          </div>

          <button onClick={handleSubmit} className="waves-effect waves-light btn">
            button
          </button>
        </div>
      </div>
    </div>
  );
}
