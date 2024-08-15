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
  popover: {
    base: 'absolute z-20 inline-block w-max max-w-[90vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800',
  },
};

export default theme;
