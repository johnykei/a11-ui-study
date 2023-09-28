import * as React from "react";

interface AutocompleteItemProps {
  title: string;
  href: string;
}

interface AutocompleteProps {
  title?: string;
  autocompleteId?: string;
  autocomplete: AutocompleteItemProps[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  title,
  autocompleteId = "autocomplete",
  autocomplete,
}) => {
  const [isShowAutocomplete, setShowAutocomplete] = React.useState(false);
  return (
    <>
      <input
        type="search"
        role="combobox"
        placeholder="Search..."
        onFocus={() => setShowAutocomplete(true)}
        onBlur={() => setShowAutocomplete(false)}
        autoComplete="off"
        aria-controls={`${autocompleteId}_list`}
        aria-autocomplete="list"
        aria-expanded={isShowAutocomplete}
      />
      {isShowAutocomplete && (
        <div>
          <h2 id="autocomplete_title">{title}</h2>
          {autocomplete && (
            <ul
              id={`${autocompleteId}_list`}
              aria-labelledby="autocomplete_title"
              role="listbox"
            >
              {autocomplete.map((item, i) => (
                <li role="option" key={`autocomplete-${i}`}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Autocomplete;
