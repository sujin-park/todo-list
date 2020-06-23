import { useState, useCallback } from 'react';
import { Dayjs } from 'dayjs';

interface InputProps {
  title: string;
  content: string;
  deadline: string | undefined;
  done: boolean;
}

const useTodoState = (defaultValue: InputProps) => {
  const [state, setState] = useState(defaultValue);

  const onChange = useCallback(
    e => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    },
    [state]
  );

  const onChangeDate = useCallback(
    (date: Dayjs | null, dateString: string) => {
      setState({
        ...state,
        deadline: dateString,
      });
    },
    [state]
  );

  const onReset = useCallback(() => setState(defaultValue), [defaultValue]);

  return [state, onChange, onChangeDate, onReset] as [
    InputProps,
    typeof onChange,
    typeof onChangeDate,
    typeof onReset
  ];
};

export default useTodoState;
