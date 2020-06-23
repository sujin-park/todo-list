import { useState, useCallback } from 'react';

const useInput = <T>(defaultValue: T) => {
  const [state, setState] = useState(defaultValue);
  const onChange = useCallback(e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }, []);

  const onReset = useCallback(initialState => setState(initialState), []);

  return [state, onChange, onReset] as [
    typeof state,
    typeof onChange,
    typeof onReset
  ];
};

export default useInput;
