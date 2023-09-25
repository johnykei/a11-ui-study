import * as React from "react";

interface AutocompleteProps {
  title?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ title }) => {
  const [isShowMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <input
        type="search"
        role="combobox"
        onFocus={() => setShowMenu(true)}
        onBlur={() => setShowMenu(false)}
        aria-autocomplete="list"
      />
      {isShowMenu && (
        <div>
          <h2 id="autocomplete_title">{title}</h2>
          <ul aria-labelledby="autocomplete_title" role="listbox">
            <li role="option">aaa</li>
            <li role="option">aaa</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Autocomplete;
