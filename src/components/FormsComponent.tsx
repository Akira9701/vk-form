import React, { Component, useState } from 'react';
import SelectForm from './Forms/SelectForm';
import { towers, dateInfo } from '../data/data';
import { Data, Towers, Date } from '../types/types';
import DatePickerComponent from './Forms/DatePicker';
import TextArea from './Forms/TextArea';

const FormsContainer = () => {
  const [state, setState] = useState<Data>({
    tower: '',
    floor: 0,
    room: '',
    month: 0,
    day: 0,
    time: '',
    message: '',
  });

  const setParametrs = (item: string, value: string | number) => {
    setState((prevState: Data) => ({ ...prevState, [item]: value }));
  };
  return (
    <div>
      <div className="form_inputs-container">
        <SelectForm
          name="Башня"
          typeData="tower"
          data={Object.keys(towers)}
          setParametrs={setParametrs}
        />
        <SelectForm
          name="Этажи"
          typeData="floor"
          data={
            state.tower in towers
              ? Object?.keys(towers?.[state.tower as keyof Towers])
              : []
          }
          setParametrs={setParametrs}
        />
        <SelectForm
          name="Номер комнаты"
          typeData="room"
          data={
            state.tower in towers &&
            state.floor in towers[state.tower as keyof Towers]
              ? towers?.[state.tower as keyof Towers][state.floor].rooms
              : []
          }
          setParametrs={setParametrs}
        />
      </div>
      <div className="form_time-container">
        <DatePickerComponent setParametrs={setParametrs} />

        {dateInfo[state.month] &&
        dateInfo[state.month][state.day] &&
        dateInfo[state.month][state.day].time.length !== 0 ? (
          <SelectForm
            name="Время"
            typeData="time"
            data={dateInfo[state.month][state.day].time}
            setParametrs={setParametrs}
          />
          ) : (
          <p>В данный день нет свобоных дат</p>
          )}
        {/* */}
      </div>
      <div className="form_message-container">
        <TextArea
          title="Комментарий"
          setParametrs={setParametrs}
          typeData="message"
        />
      </div>
      <div className="form_btn-container">
        <p>1</p>
      </div>
    </div>
  );
};

export default FormsContainer;
