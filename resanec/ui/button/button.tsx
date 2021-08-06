import * as React from 'react';

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Button({ text, ...props }: ButtonProps) {
  return (
    <div {...props}>
      {text}
    </div>
  );
}
