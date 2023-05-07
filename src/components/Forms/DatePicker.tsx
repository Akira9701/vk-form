import React, { Component } from 'react';
import dayjs, { Dayjs } from 'dayjs';
// eslint-disable-next-line import/extensions
import ru from 'dayjs/locale/ru.js';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ruRU, deDE } from '@mui/x-date-pickers/locales';

import { Data } from '../../types/types';
import 'dayjs/locale/de';

interface DatePickerInterface {
  setParametrs(type: string, value: number | string): void;
}

const DatePickerComponent: React.FC<DatePickerInterface> = ({
  setParametrs,
}) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <div className="form_datepicker-block">
      <p className="form_title-item">Дата</p>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ru}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            // label="Controlled"
            // localeText={ruRU}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setParametrs('month', newValue!.month() + 1);
              setParametrs('day', newValue!.date());

              console.log(newValue?.date(), newValue?.month());
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerComponent;
