/* eslint-disable import/prefer-default-export */

export const tw = (
  strings: string[] | ArrayLike<string>,
  ...values: unknown[]
) => String.raw({ raw: strings }, ...values);
