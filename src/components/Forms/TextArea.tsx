import React, { Component } from 'react';
import Textarea from '@mui/joy/Textarea';

interface TexAreaInterface {
  setParametrs(type: string, value: number | string): void;
  title: string;
  typeData: string;
}

const TextArea: React.FC<TexAreaInterface> = ({
  setParametrs,
  title,
  typeData,
}) => {
  return (
    <div className="form_textarea-block">
      <p className="form_title-item">{title}</p>
      <Textarea
        variant="plain"
        minRows={2}
        placeholder="Ваш комментарий..."
        size="md"
        // variant="plain"
        color="neutral"
        onChange={(event) => {
          console.log(event.target.value);
          setParametrs(typeData, event.target.value as string);
        }}
      />
    </div>
  );
};

export default TextArea;
