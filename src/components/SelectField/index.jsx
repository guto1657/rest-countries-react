import React, { useEffect, useState } from 'react';
import useToggle from '../../hooks/useToggle';
import {
  SelectWrapper,
  SelectHeader,
  SelectListWrapper,
  ListItem,
  DropdownList,
  SelectName,
  ArrowIcon,
} from './SelectFieldElements';
import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';

export const SelectField = ({ title = '', options = [] }) => {
  const [isSelectOpen, toggleSelect] = useToggle();
  const [selectOption, setSelectOption] = useState(null);
  const [appState, actions] = useAppContext();

  const onOptionClicked = (value) => {
    if (value === selectOption) {
      setSelectOption(null);
      toggleSelect();
      actions.updateSelectFilter(null);
    } else {
      setSelectOption(value);
      toggleSelect();
      actions.updateSelectFilter(value);
    }
  };

  return (
    <SelectWrapper>
      <SelectHeader onClick={() => toggleSelect()} dark={appState.darkMode ? 1 : 0}>
        <SelectName>{!selectOption ? title : selectOption}</SelectName>
        <ArrowIcon />
      </SelectHeader>
      <SelectListWrapper open={isSelectOpen}>
        <DropdownList dark={appState.darkMode ? 1 : 0}>
          {options.length &&
            options.map((option, index) => (
              <ListItem key={index} onClick={() => onOptionClicked(option.value)}>
                {option.name}
              </ListItem>
            ))}
        </DropdownList>
      </SelectListWrapper>
    </SelectWrapper>
  );
};

SelectField.propTypes = {
  title: P.string.isRequired,
  options: P.array.isRequired,
};
