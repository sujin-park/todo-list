import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';

import 'antd/dist/antd.css';
import locale from 'antd/es/date-picker/locale/ko_KR';

interface DatepickerProps {
  value?: string;
  disabled: boolean;
  onChange: (date: Dayjs | null, dateString: string) => void;
  highlight?: boolean;
}

const AntdPicker = generatePicker<Dayjs>(dayjsGenerateConfig);

const Datepicker: React.FC<DatepickerProps> = ({
  value,
  disabled,
  highlight = false,
  onChange,
}) => {
  const fontWeight = highlight ? 'bold' : 'normal';
  const date = value ? dayjs(value) : null;

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
