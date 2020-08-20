// https://github.com/Gapur/google-place-autocomplete
import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchLocationInput.module.css';

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

function handleScriptLoad(updateQuery, addressSelected, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { componentRestrictions: { country: 'br' } },
  );
  autoComplete.addListener('place_changed', () =>
    handlePlaceSelect(updateQuery, addressSelected),
  );
}

async function handlePlaceSelect(updateQuery, addressSelected) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  addressSelected(addressObject);
}

function SearchLocationInput({ addressSelected }) {
  const [query, setQuery] = useState('');
  const autoCompleteRef = useRef(null);
  const key = 'AIzaSyD2zotakcoXdOE9gLpr-ZnSehbnQXfJhMo';

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`,
      () => handleScriptLoad(setQuery, addressSelected, autoCompleteRef),
    );
  }, [addressSelected]);

  return (
    <div className={styles.searchLocationInput}>
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Insira seu endereço para ver os preços"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;
