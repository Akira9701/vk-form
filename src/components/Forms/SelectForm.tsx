import React, { Component, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import { Towers } from '../../types/types';

interface SelectFormInterface {
  name: string;
  data: string[] | number[];
  typeData: string;
  setParametrs: any;
}
const SelectForm: React.FC<SelectFormInterface> = ({
  name,
  data,
  typeData,
  setParametrs,
}) => {
  const [val, setVal] = useState('');

  return (
    <div className="form_select-form-block">
      <p className="form_title-item">{name}</p>
      <div>
        <FormControl className="form_select-form-block_item-form">
          <Select
            className="form_select-form-block_select"
            onChange={(
              event: React.SyntheticEvent | null,
              value: string | null
            ) => {
              console.log(value);
              setParametrs(typeData, value as string);
              setVal(value as string);
            }}
            variant="soft"
          >
            {/* <MenuItem value="">
              <em>-</em>
            </MenuItem> */}
            {data.map((el) => (
              <Option key={el} value={el}>
                <em>{el}</em>
              </Option>
            ))}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SelectForm;
