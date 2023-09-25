import * as React from "react";

interface AutocompleteProps {
  title?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ title }) => {
  return (
    <>
      <input type="search" role="combobox" aria-autocomplete="list" />
      <div>
        <h2>{title}</h2>
        <ul>
          <li>aaa</li>
          <li>aaa</li>
        </ul>
      </div>
    </>
  );
};

export default Autocomplete;
