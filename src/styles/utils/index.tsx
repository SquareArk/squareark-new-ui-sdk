import { flex } from './flex';

export const utils = {
  flex: {
    ...flex,
  },
  isMoible: (val: number) => {
    return `calc(100vw * ${val} / 375)`;
  },
};
