import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';

import 'antd/dist/antd.css';
import locale from 'antd/es/date-picker/locale/ko_KR';
import styled from 'styled-components';

interface DatepickerProps {
  value?: string;
  disabled: boolean;
  onChange: (date: Dayjs | null, dateString: string) => void;
  highlight?: boolean;
}

const AntdPicker = generatePicker<Dayjs>(dayjsGenerateConfig);

const DateContainer = styled(AntdPicker)`
  padding: 0;
  input {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Datepicker: React.FC<DatepickerProps> = ({
  value,
  disabled,
  onChange,
}) => {
  const date = value ? dayjs(value) : null;

  return (
    <DateContainer
      locale={locale}
      size="small"
      placeholder="마감일"
      bordered={false}
      value={date}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Datepicker;
