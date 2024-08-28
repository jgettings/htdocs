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
    base: 'absolute z-20 inline-block w-max max-w-[90vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800 m-2 max-w-xl text-base md:w-fit',
  },
  card: {
    root: {
      base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 shadow-lg shadow-gray-700 m-2 max-w-xl text-base md:w-fit',
      horizontal: {
        on: 'flex-col-reverse md:max-w-xl md:flex-row-reverse',
      },
    },
    img: {
      horizontal: {
        on: 'w-full rounded-b-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-r-lg',
      },
    },
  },
};

export default theme;
