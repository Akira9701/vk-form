import { Interests } from '@mui/icons-material';

export interface Towers {
  A: {
    [key: number]: {
      rooms: number[];
    };
  };
  B: {
    [key: number]: {
      rooms: number[];
    };
  };
}

export interface Data {
  tower: string;
  floor: number;
  room: string;
  month: number;
  day: number;
  time: string;
  message: string;
}

export interface Date {
  [key: number]: {
    [key: number]: {
      time: string[];
    };
  };
}
