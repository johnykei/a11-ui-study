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
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;

      case "End":
        e.preventDefault();
        setActiveIndex(autocomplete.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <input
        type="search"
        role="combobox"
        placeholder="Search..."
        id={`${autocompleteId}_input`}
        className="
          px-2 py-1.5 
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800
          rounded-sm
        "
        onFocus={() => setShowAutocomplete(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        aria-controls={`${autocompleteId}_list`}
        aria-autocomplete="list"
        aria-expanded={isShowAutocomplete}
      />
      {isShowAutocomplete && (
        <div
          className="
            absolute top-full
            py-2 mt-2
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800
            shadow-sm
            rounded-sm
          "
        >
          <h2 id="autocomplete_title" className="mb-3 px-4 font-bold">
            {title}
          </h2>
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
                  className="
                    [&+&]:mt-2
                    aria-selected:bg-gray-100 aria-selected:dark:bg-gray-700
                  "
                >
                  <a
                    href={item.href}
                    id={`${autocompleteId}_item_${i}`}
                    className="
                      block
                      px-4 py-1
                      text-sm
                      text-gray-800 dark:text-white
                      hover:text-gray-800 hover:dark:text-white hover:bg-gray-100 hover:dark:bg-gray-700
                    "
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
