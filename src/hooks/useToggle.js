import React, { useState, useCallback } from 'react';

/**
 * @function useToggleHook
 * @description React Hook to handle toggle button and lists
 * @author Gustavo Matos
 * @returns {Array:Function} : [open, handleClickOpen, handleClose]
 * @example [isOpen,openToggle] = useToggle()
 */
function useToggle(defaultState) {
  const [open, setOpen] = useState(defaultState || false);

  const toggleFun = useCallback(
    (e) => {
      setOpen(!open);
    },
    [open],
  );

  return [open, toggleFun];
}

export default useToggle;
