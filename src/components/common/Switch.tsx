import React from 'react';
import { Switch as AntdSwitch } from 'antd';

interface ToggleProps {
  toggleTheme: () => void;
}

const Switch: React.FC<ToggleProps> = ({ toggleTheme }) => {
  return (
    <AntdSwitch
      checkedChildren="Dark"
      unCheckedChildren="Light"
      onChange={toggleTheme}
    />
  );
};

export default Switch;
