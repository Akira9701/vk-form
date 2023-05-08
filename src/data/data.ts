import {Towers} from '../types/types';

const towers: Towers = {
  A: {
    floor: {
      1: {
        room: {
          101: {
            month: {
              1: {
                day: {
                  1: {
                    time: ['11:00 - 12:00', '12:30 - 13:30', '14:00 - 15:00'],
                  },
                  2: {
                    time: ['11:00 - 12:00', '12:30 - 13:30', '14:00 - 15:00'],
                  },
                  3: {
                    time: ['11:00 - 12:00', '12:30 - 13:30', '14:00 - 15:00'],
                  },
                  4: {
                    time: ['11:00 - 12:00', '12:30 - 13:30', '14:00 - 15:00'],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const towersFunc = (): Promise<string> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.stringify(towers));
    }, 2000);
  });

export default towersFunc;
