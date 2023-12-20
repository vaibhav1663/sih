import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ reviewers, onChange, bookname, r, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const dropdownRef = useRef(null);

  const reviewerData = reviewers.map((reviewer) => {
    return [reviewer._id, reviewer.name];
  });

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item) => {
    onChange(bookname, item[0], r);
    setSelectedItem(item[1]);
    handleToggleDropdown();
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleDocumentClick = (e) => {
    // Close the dropdown if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add a click event listener to the document to close the dropdown on outside clicks
    document.addEventListener('click', handleDocumentClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex items-center justify-center" ref={dropdownRef}>
      <div className="relative group">
        <button
          id="dropdown-button"
          className="inline-flex justify-center px-2 py-2 ext-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          onClick={handleToggleDropdown}
        >
          <span className="mr-2">{selectedItem}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="dropdown-menu"
          style={{overflowY: "auto"}}
          className={`${
            isOpen ? '' : 'hidden'
          } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-50 max-h-fit`}
        >
          <input
            id="search-input"
            className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search items"
            autoComplete="off"
            value={searchTerm}
            onChange={handleSearchInput}
          />

          {reviewerData.map(
            (item) => (
              <a
                onClick={() => handleClick(item)}
                key={item[0]}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md ${
                  item[1].toLowerCase().includes(searchTerm) ? 'block' : 'hidden'
                }`}
              >
                {item[1]}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
