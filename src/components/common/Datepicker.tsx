import React from 'react';
import { DatePicker as AntdPicker } from 'antd';

import 'antd/dist/antd.css';
import locale from 'antd/es/date-picker/locale/ko_KR';
import moment, { Moment } from 'moment';

interface DatepickerProps {
  value?: string;
  disabled: boolean;
  onChange: (date: Moment | null, dateString: string) => void;
  highlight?: boolean;
}

const Datepicker: React.FC<DatepickerProps> = ({
  value,
  disabled,
  highlight = false,
  onChange,
}) => {
  const fontWeight = highlight ? 'bold' : 'normal';
  const date = value ? moment(value) : null;

  return (
    <AntdPicker
      locale={locale}
      size="small"
      placeholder="마감 날짜"
      style={{ padding: 0, fontWeight: fontWeight }}
      bordered={false}
      value={date}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Datepicker;
