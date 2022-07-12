import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import {
  SearchFieldWrapper,
  SearchIcon,
  SearchPlaceholder,
} from './SearchFieldElements';

export const SearchField = () => {
  const [appState, actions] = useAppContext();
  const { searchValue } = appState;
  const searchPlaceholder = useRef(null);
  const isMounted = useRef(true);

  const handleKeyPress = (e) => {
    const keyValue = e.target.value;
    searchPlaceholder.current.value = keyValue;
    actions.updateSearchValue(keyValue);
  };

  useEffect(() => {
    if (isMounted) {
      searchPlaceholder.current.value = searchValue;
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted, searchValue]);

  return (
    <SearchFieldWrapper>
      <SearchIcon dark={appState.darkMode ? 1 : 0} />
      <SearchPlaceholder
        dark={appState.darkMode ? 1 : 0}
        onKeyUp={handleKeyPress}
        ref={searchPlaceholder}
        type="text"
        placeholder="Search for a country..."
      />
    </SearchFieldWrapper>
  );
};
