import type { CustomFlowbiteTheme } from 'flowbite-react';

const theme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-red-500 hover:bg-red-600',
    },
  },
  avatar: {
    root: {
      img: {
        base: 'aspect-square object-cover border-2 border-white',
      },
      size: {
        xl: 'w-60',
      },
    },
  },
};

export default theme;
