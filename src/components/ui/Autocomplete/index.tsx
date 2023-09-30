import * as React from "react";

interface AutocompleteItemProps {
  title: string;
  href: string;
}

interface AutocompleteProps {
  title?: string;
  autocomplete: AutocompleteItemProps[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ title, autocomplete }) => {
  const autocompleteId = React.useId();
  const [isShowAutocomplete, setShowAutocomplete] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const handleBlur = () => {
    setShowAutocomplete(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        if (activeIndex >= 0) {
          const selectedElement = document.getElementById(
            `${autocompleteId}_item_${activeIndex}`
          );
          if (selectedElement) {
            selectedElement.click();
          }
        }

        break;
      case "ArrowDown":
        autocomplete && activeIndex !== autocomplete.length - 1
          ? setActiveIndex((prevIndex) =>
              Math.min(prevIndex + 1, autocomplete.length - 1)
            )
          : setActiveIndex(0);
        break;
      case "ArrowUp":
        if (autocomplete) {
          e.preventDefault();
          setActiveIndex((prevIndex) =>
            prevIndex === 0
              ? autocomplete.length - 1
              : Math.max(prevIndex - 1, 0)
          );
        }
        break;
      case "Escape":
        e.preventDefault();
        setActiveIndex(-1);
        break;
    }
  };

  return (
    <>
      <input
        type="search"
        role="combobox"
        placeholder="Search..."
        id={`${autocompleteId}_input`}
        onFocus={() => setShowAutocomplete(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
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
                <li
                  role="option"
                  key={`autocomplete-${i}`}
                  aria-selected={i === activeIndex}
                  className="aria-selected:bg-gray-800"
                >
                  <a href={item.href} id={`${autocompleteId}_item_${i}`}>
                    {item.title}
                  </a>
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
